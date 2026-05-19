import os
import re
import glob

components_dir = r"c:\Users\ajay.munagala\Desktop\Portifolio\arvind-portfolio\src\components"

for filepath in glob.glob(os.path.join(components_dir, '*.jsx')):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace <!-- comment --> with {/* comment */}
    new_content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed comments in {os.path.basename(filepath)}")
