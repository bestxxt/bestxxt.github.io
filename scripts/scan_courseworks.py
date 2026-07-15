import os
import json
import PyPDF2

courseworks_dir = "courseworks"

def parse_notebook(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            nb = json.load(f)
        md_cells = [c["source"] for c in nb.get("cells", []) if c["cell_type"] == "markdown"]
        # Join the first few markdown cells
        text = "\n".join("".join(md) for md in md_cells[:5])
        return text[:1000] # return first 1000 chars
    except Exception as e:
        return f"Error parsing notebook: {e}"

def parse_pdf(path):
    try:
        with open(path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            if len(reader.pages) > 0:
                text = reader.pages[0].extract_text()
                return text[:1000]
            return "No text found in PDF."
    except Exception as e:
        return f"Error parsing PDF: {e}"

print("=== Coursework Scanner ===")
for root, dirs, files in os.walk(courseworks_dir):
    for file in files:
        if file.startswith(".~") or file.startswith("~"): continue
        
        filepath = os.path.join(root, file)
        
        if file.endswith(".ipynb"):
            print(f"\n[NOTEBOOK] {filepath}")
            print(parse_notebook(filepath))
            print("-" * 40)
        elif file.endswith(".pdf"):
            print(f"\n[PDF] {filepath}")
            print(parse_pdf(filepath))
            print("-" * 40)
