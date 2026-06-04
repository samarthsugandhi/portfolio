import pytesseract
from PIL import Image, ImageDraw

img_path = 'static/models/Computer/baked_computer.jpg'
img = Image.open(img_path)

data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)

for i in range(len(data['text'])):
    text = data['text'][i].strip().lower()
    if 'heff' in text or 'henry' in text:
        x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
        print(f"Found '{text}' at x:{x}, y:{y}, w:{w}, h:{h}")
