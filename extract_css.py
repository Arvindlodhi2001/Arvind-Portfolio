import re

html_path = r"c:\Users\ajay.munagala\Desktop\Portifolio\arvind_portfolio_v2 (1) (1).html"
css_path = r"c:\Users\ajay.munagala\Desktop\Portifolio\arvind-portfolio\src\index.css"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if match:
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(match.group(1).strip())
    print("CSS extracted.")
else:
    print("No style block found.")
