#!/bin/bash
cd "$(dirname "$0")/.."

echo "Preparing image processing environment..."

if [ ! -d "scripts/venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv scripts/venv
    source scripts/venv/bin/activate
    pip install Pillow pillow-heif
else
    source scripts/venv/bin/activate
fi

python scripts/process_photos.py
