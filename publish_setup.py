#!/usr/bin/env python3
"""Finish SEO only when Minal's final public HTTPS domain is confirmed.

Usage (from inside minal-portfolio):
    python publish_setup.py https://ACTUAL-MINAL-DOMAIN/
    python publish_setup.py https://ACTUAL-DOMAIN/repository/  # optional project path

Writes canonical URLs, absolute social preview URLs, JSON-LD identity and
page breadcrumbs, and sitemap.xml. A sitemap reference is written to
robots.txt only when the site is hosted at the domain root. Safe to rerun
with the corrected domain if it ever changes. Never run with the GitHub
Pages preview URL as the final domain.
"""
import html
import ipaddress
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit
from xml.etree.ElementTree import Element, SubElement, ElementTree, indent

root = Path(__file__).resolve().parent
if len(sys.argv) != 2:
    raise SystemExit("Usage: python publish_setup.py https://YOUR-ACTUAL-DOMAIN/  (wait until domain is known)")
raw = sys.argv[1].strip()
url = urlsplit(raw)
raw_path = url.path
path = url.path.rstrip('/')
segments = path[1:].split('/') if path else []
invalid_path = raw_path not in ('','/') and (not path or raw_path.startswith('//') or raw_path.endswith('//') or any(not re.fullmatch(r'[A-Za-z0-9_-][A-Za-z0-9._~-]*', segment) for segment in segments))
if url.scheme != 'https' or not url.hostname or url.username or url.password or url.port or url.query or url.fragment or invalid_path:
    raise SystemExit("Enter the actual production HTTPS URL, with an optional simple path prefix, e.g. https://your-real-domain.tld/repository/")
host = url.hostname.lower()
if host in ('localhost','example.com','www.example.com','yourdomain.com','your-domain.com','www.example-domain.in') or host.endswith(('.localhost','.local','.test','.invalid','.example','.github.io','.hostingerapp.com')) or '.' not in host:
    raise SystemExit("Please use Minal's REAL public domain, not GitHub preview, localhost, a placeholder, or a temporary address.")
try:
    ipaddress.ip_address(host)
except ValueError:
    pass
else:
    raise SystemExit("Enter a domain name, not an IP address.")
base = urlunsplit(('https',url.netloc,path+'/','',''))
page_names = ['', 'about','services','support','resources','workplace','book-research','insights','shop','contact','privacy']
labels={'about':'About Minal','services':'Psychology & Well-being Services','support':'Areas of Support','resources':'Mental Well-being Resources','workplace':'HR & Workplace','book-research':'Book & Research','insights':'Insights & Updates','shop':'Psychology Shop','contact':'Contact Minal','privacy':'Privacy & Website Notice'}
pages=[(root / ('index.html' if not s else s+'/index.html'), s) for s in page_names]
for f, s in pages:
    if not f.is_file():
        raise SystemExit('Missing page: '+str(f))

def replace_meta(source, key, value, attr='property'):
    # Attribute placement may differ. Match a named/property attribute in either order.
    pattern=rf'<meta\b(?=[^>]*\b{attr}="{re.escape(key)}")[^>]*>'
    tag=f'<meta {attr}="{html.escape(key,quote=True)}" content="{html.escape(value,quote=True)}"/>'
    if re.search(pattern,source):
        return re.sub(pattern,lambda _ :tag,source,count=1)
    return source.replace('</head>',tag+'</head>',1)

def replace_link(source,rel,value):
    pattern=rf'<link\b(?=[^>]*\brel="{re.escape(rel)}")[^>]*>'
    tag=f'<link rel="{rel}" href="{html.escape(value,quote=True)}" data-site-url="true"/>'
    if re.search(pattern,source):
        return re.sub(pattern,lambda _:tag,source,count=1)
    return source.replace('</head>',tag+'</head>',1)

for file,slug in pages:
    canonical = base + (slug+'/' if slug else '')
    source=file.read_text(encoding='utf-8')
    # Production HTML must never have an accidental preview noindex tag.
    source = re.sub(r'<meta\b(?=[^>]*\bname="robots")(?=[^>]*\bcontent="[^"]*noindex[^"]*")[^>]*>','',source,flags=re.I)
    source=replace_link(source,'canonical',canonical)
    for key,val in [('og:url',canonical),('og:image',base+'assets/social-sharing-preview.jpg'),('og:image:secure_url',base+'assets/social-sharing-preview.jpg')]:
        source=replace_meta(source,key,val)
    source=replace_meta(source,'twitter:image',base+'assets/social-sharing-preview.jpg','name')
    source=re.sub(r'<script\b[^>]*\bdata-site-structured="true"[^>]*>.*?</script>','',source,flags=re.S)
    if slug=='':
        graph=[{'@type':'WebSite','@id':base+'#website','url':base,'name':'Minal Marudkar','inLanguage':'en-IN'},
               {'@type':'Person','@id':base+'#minal','name':'Minal Marudkar','url':base+'about/','image':base+'assets/minal-portrait.webp', 'sameAs':['https://www.linkedin.com/in/minal-guhe-marudkar-278244aa/'], 'knowsLanguage':['English','Hindi','Marathi'], 'homeLocation':{'@type':'Place','name':'Navi Mumbai, Maharashtra, India'}}]
    else:
        graph=[{'@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':labels[slug],'isPartOf':{'@id':base+'#website'},'inLanguage':'en-IN'},
               {'@type':'BreadcrumbList','@id':canonical+'#breadcrumb','itemListElement':[
                  {'@type':'ListItem','position':1,'name':'Home','item':base},
                  {'@type':'ListItem','position':2,'name':labels[slug],'item':canonical}]}]
        if slug=='about':
            graph.append({'@type':'ProfilePage','@id':canonical+'#profile','url':canonical,'mainEntity':{'@id':base+'#minal'}})
            graph.append({'@type':'Person','@id':base+'#minal','name':'Minal Marudkar','url':canonical,'image':base+'assets/minal-portrait.webp','sameAs':['https://www.linkedin.com/in/minal-guhe-marudkar-278244aa/'], 'knowsLanguage':['English','Hindi','Marathi'],'homeLocation':{'@type':'Place','name':'Navi Mumbai, Maharashtra, India'}})
    data={'@context':'https://schema.org','@graph':graph}
    structured=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
    source=source.replace('</head>','<script type="application/ld+json" data-site-structured="true">'+structured+'</script></head>',1)
    file.write_text(source,encoding='utf-8')

sitemap=Element('urlset',xmlns='http://www.sitemaps.org/schemas/sitemap/0.9')
for _,slug in pages:
    entry=SubElement(sitemap,'url')
    SubElement(entry,'loc').text=base+(slug+'/' if slug else '')
indent(sitemap,space='  ')
ElementTree(sitemap).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
if not path:
    (root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+base+'sitemap.xml\n',encoding='utf-8')
else:
    print('For project subpaths, submit the sitemap in Search Console; root robots.txt was not changed.')
print('SEO READY FOR',base,'|',len(pages),'pages | sitemap.xml generated')
print('NEXT: Upload the CONTENTS of minal-portfolio into Hostinger public_html, and verify the actual pages.')
