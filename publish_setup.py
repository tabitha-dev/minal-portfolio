#!/usr/bin/env python3
"""Finalize SEO and social sharing for Minal's static, clean-URL portfolio.
Run after choosing the real public base URL:
    python publish_setup.py https://www.example-domain.in/
Supports GitHub Pages project subpaths as well.
Safe to rerun after changing domains.
"""
import json, re, sys, html
from pathlib import Path
from urllib.parse import urlsplit
from xml.etree.ElementTree import Element, SubElement, ElementTree, indent

root = Path(__file__).resolve().parent
if len(sys.argv) != 2:
    raise SystemExit('Usage: python publish_setup.py https://ACTUAL-DOMAIN/ (supports /repo/ paths)')
base = sys.argv[1].strip().rstrip('/') + '/'
u = urlsplit(base)
if u.scheme != 'https' or not u.netloc or u.username or u.password or u.query or u.fragment:
    raise SystemExit('Use a public HTTPS URL without query, fragment, or credentials.')
if u.hostname in {'example.com', 'www.example.com', 'yourdomain.com', 'your-domain.com', 'www.example-domain.in'}:
    raise SystemExit('Use the actual production URL, not a placeholder.')

pages = [(root / 'index.html', '')] + sorted((p / 'index.html', p.name + '/') for p in root.iterdir() if p.is_dir() and (p / 'index.html').is_file())
assert len(pages) == 11, 'Expected the 11 primary pages.'
urls = {suffix: base + suffix for _, suffix in pages}
image = base + 'assets/social-sharing-preview.jpg'

def write_link(source, rel, value):
    pattern = rf'<link\b(?=[^>]*\brel="{re.escape(rel)}")[^>]*\bdata-site-url="true"[^>]*/?>'
    tag = f'<link rel="{rel}" href="{html.escape(value, quote=True)}" data-site-url="true"/>'
    return re.sub(pattern, lambda _:tag, source) if re.search(pattern, source) else source.replace('</head>', tag+'</head>', 1)

def write_meta(source, prop, value, is_name=False):
    attribute = 'name' if is_name else 'property'
    pattern = rf'<meta\b(?=[^>]*\b{attribute}="{re.escape(prop)}")[^>]*/?>'
    tag = f'<meta content="{html.escape(value, quote=True)}" {attribute}="{prop}"/>'
    return re.sub(pattern, lambda _:tag, source) if re.search(pattern, source) else source.replace('</head>', tag+'</head>', 1)

for p, suffix in pages:
    source = p.read_text(encoding='utf-8')
    canonical = urls[suffix]
    source = write_link(source, 'canonical', canonical)
    source = write_meta(source, 'og:url', canonical)
    source = write_meta(source, 'og:image', image)
    source = write_meta(source, 'twitter:image', image, True)
    source = re.sub(r'<script data-site-structured="true" type="application/ld\+json">.*?</script>', '', source, flags=re.S)
    if suffix == '':
        data = {'@context':'https://schema.org', '@type':'WebSite', 'name':'Minal Marudkar', 'url':base,
                'inLanguage':'en-IN', 'about':{'@type':'Person', 'name':'Minal Marudkar', 'url':urls['about/']}}
    elif suffix == 'about/':
        data = {'@context':'https://schema.org', '@type':'ProfilePage', 'url':canonical,
                'mainEntity':{'@type':'Person', 'name':'Minal Marudkar',
                   'description':'Psychologist, writer and HR professional based in Navi Mumbai, India.',
                   'url':canonical, 'image':base+'assets/minal-portrait.webp',
                   'sameAs':['https://www.linkedin.com/in/minal-guhe-marudkar-278244aa/'],
                   'knowsLanguage':['English','Hindi','Marathi']}}
    else:
        data = None
    if data:
        serialized = json.dumps(data, ensure_ascii=False, separators=(',',':')).replace('<', '\\u003c')
        source = source.replace('</head>', '<script data-site-structured="true" type="application/ld+json">'+ serialized +'</script></head>', 1)
    p.write_text(source, encoding='utf-8')

sitemap = Element('urlset', xmlns='http://www.sitemaps.org/schemas/sitemap/0.9')
for p, suffix in pages:
    entry=SubElement(sitemap, 'url'); SubElement(entry, 'loc').text=urls[suffix]
indent(sitemap, space='  ')
ElementTree(sitemap).write(root/'sitemap.xml', encoding='utf-8', xml_declaration=True)
# robots.txt must live at the domain root; for hosted /repo/ paths use Search Console's sitemap entry.
if u.path == '/':
    (root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+base+'sitemap.xml\n', encoding='utf-8')
print('Prepared', len(pages), 'canonical clean URLs. Sitemap:', base+'sitemap.xml')
print('Sharing image:', image)
