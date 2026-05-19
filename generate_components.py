import re
import os

html_path = r"c:\Users\ajay.munagala\Desktop\Portifolio\arvind_portfolio_v2 (1) (1).html"
components_dir = r"c:\Users\ajay.munagala\Desktop\Portifolio\arvind-portfolio\src\components"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

def html_to_jsx(html):
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    # Fix inline styles (very basic, specifically for style="position:relative;z-index:2;" etc)
    html = html.replace('style="position:relative;z-index:2;"', 'style={{position:"relative", zIndex:2}}')
    html = html.replace('style="background:linear-gradient(135deg,#1e1a17,#2a2018);"', 'style={{background:"linear-gradient(135deg,#1e1a17,#2a2018)"}}')
    html = html.replace('style="background:linear-gradient(135deg,#1a1818,#261c1c);"', 'style={{background:"linear-gradient(135deg,#1a1818,#261c1c)"}}')
    html = html.replace('style="background:linear-gradient(135deg,#1a1c14,#22201a);"', 'style={{background:"linear-gradient(135deg,#1a1c14,#22201a)"}}')
    html = html.replace('style="background:linear-gradient(135deg,#14181e,#1c2030);"', 'style={{background:"linear-gradient(135deg,#14181e,#1c2030)"}}')
    html = html.replace('style="cursor:default;"', 'style={{cursor:"default"}}')
    # Close single tags
    html = html.replace('<hr class="hc-sep">', '<hr className="hc-sep"/>')
    html = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1/>', html)
    html = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1/>', html)
    html = html.replace('<br>', '<br/>')
    
    # Remove onclick attributes
    html = re.sub(r'onclick="[^"]*"', 'onClick={() => alert("Thanks! For fastest response, please email: arvindlodhi850@gmail.com")}', html)
    return html

sections = {
    'Hero': r'<section id="hero">(.*?)</section>',
    'About': r'<section id="about">(.*?)</section>',
    'Experience': r'<section id="experience">(.*?)</section>',
    'Skills': r'<section id="skills">(.*?)</section>',
    'Projects': r'<section id="projects">(.*?)</section>',
    'Education': r'<section id="education">(.*?)</section>',
    'Contact': r'<section id="contact">(.*?)</section>',
    'Footer': r'<footer>(.*?)</footer>'
}

for name, regex in sections.items():
    match = re.search(regex, content, re.DOTALL)
    if match:
        html = match.group(0)
        jsx = html_to_jsx(html)
        # Wrap in a functional component
        comp = f"""import React from 'react';

const {name} = () => {{
  return (
{jsx}
  );
}};

export default {name};
"""
        with open(os.path.join(components_dir, f"{name}.jsx"), 'w', encoding='utf-8') as f:
            f.write(comp)
        print(f"Created {name}.jsx")
    else:
        print(f"Failed to find {name}")
