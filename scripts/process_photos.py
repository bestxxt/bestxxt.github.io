import os
import glob
import json
from PIL import Image, ImageOps
import pillow_heif
import shutil

pillow_heif.register_heif_opener()

project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
raw_dir = os.path.join(project_root, "public", "img", "photowall_raw")
target_dir = os.path.join(project_root, "public", "img", "photowall")
archive_dir = os.path.join(raw_dir, "archive")
data_file = os.path.join(project_root, "src", "data", "photos.json")

os.makedirs(target_dir, exist_ok=True)
os.makedirs(archive_dir, exist_ok=True)
os.makedirs(os.path.dirname(data_file), exist_ok=True)

# Find existing processed photos to determine next index
existing = glob.glob(os.path.join(target_dir, "photo_*.jpg"))
existing_indices = []
for f in existing:
    basename = os.path.basename(f)
    try:
        idx = int(basename.replace("photo_", "").replace(".jpg", ""))
        existing_indices.append(idx)
    except:
        pass

next_idx = max(existing_indices) + 1 if existing_indices else 1

files = []
for ext in ('*.jpg', '*.JPG', '*.jpeg', '*.JPEG', '*.png', '*.PNG', '*.heic', '*.HEIC'):
    files.extend(glob.glob(os.path.join(raw_dir, ext)))

processed_count = 0
for filepath in sorted(files):
    try:
        with Image.open(filepath) as img:
            # Correct orientation based on EXIF before stripping it
            img = ImageOps.exif_transpose(img)
            
            if img.mode != 'RGB':
                img = img.convert('RGB')
            img.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
            new_filename = f"photo_{next_idx:03d}.jpg"
            new_filepath = os.path.join(target_dir, new_filename)
            img.save(new_filepath, "JPEG", quality=82)
            print(f"Processed {os.path.basename(filepath)} -> {new_filename}")
            
            # Archive raw file
            shutil.move(filepath, os.path.join(archive_dir, os.path.basename(filepath)))
            
            next_idx += 1
            processed_count += 1
    except Exception as e:
        print(f"Failed to process {os.path.basename(filepath)}: {e}")

# Generate JSON for React
final_photos = sorted(glob.glob(os.path.join(target_dir, "photo_*.jpg")))
photo_data = []
for i, p in enumerate(final_photos):
    with Image.open(p) as img:
        w, h = img.size
    photo_data.append({
        "src": f"/img/photowall/{os.path.basename(p)}", 
        "alt": f"Photography {i+1}", 
        "title": f"Moment {i+1}",
        "width": w,
        "height": h
    })

with open(data_file, 'w') as f:
    json.dump(photo_data, f, indent=2)

print(f"Finished! Processed {processed_count} new photos. Total photos currently active: {len(photo_data)}.")
