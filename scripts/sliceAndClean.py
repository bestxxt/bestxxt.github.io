import sys
import os
from PIL import Image

def slice_and_clean(input_path, output_dir):
    try:
        img = Image.open(input_path).convert('RGBA')
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    width, height = img.size
    rows, cols = 5, 5
    slice_w = width // cols
    slice_h = height // rows

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    idx = 1
    for i in range(rows):
        for j in range(cols):
            box = (j * slice_w, i * slice_h, (j + 1) * slice_w, (i + 1) * slice_h)
            cropped = img.crop(box)
            
            # Convert to grayscale to use as an inverted alpha mask
            grayscale = cropped.convert('L')
            
            # Create a new fully black image
            black_img = Image.new('RGBA', cropped.size, (0, 0, 0, 0))
            
            # Use the inverted grayscale as the alpha channel
            # White (255) becomes alpha 0 (transparent)
            # Black (0) becomes alpha 255 (opaque)
            from PIL import ImageOps
            alpha = ImageOps.invert(grayscale)
            black_img.putalpha(alpha)
            
            # Save the result
            out_path = os.path.join(output_dir, f"hero-icon-{idx}.png")
            black_img.save(out_path, "PNG")
            print(f"Saved {out_path}")
            idx += 1

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python sliceAndClean.py <input_image> <output_dir>")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_directory = sys.argv[2]
    slice_and_clean(input_file, output_directory)
