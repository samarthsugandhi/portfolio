import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk, ImageDraw

class ImagePatcher:
    def __init__(self, root, image_path):
        self.root = root
        self.image_path = image_path
        self.original_image = Image.open(image_path)
        
        # Calculate resize ratio to fit screen
        screen_width = root.winfo_screenwidth() - 100
        screen_height = root.winfo_screenheight() - 100
        
        self.ratio = min(screen_width / self.original_image.width, screen_height / self.original_image.height)
        if self.ratio > 1:
            self.ratio = 1.0
            
        new_size = (int(self.original_image.width * self.ratio), int(self.original_image.height * self.ratio))
        self.display_image = self.original_image.resize(new_size, Image.Resampling.LANCZOS)
        self.tk_image = ImageTk.PhotoImage(self.display_image)

        self.canvas = tk.Canvas(root, width=new_size[0], height=new_size[1], cursor="cross")
        self.canvas.pack()
        self.canvas.create_image(0, 0, anchor=tk.NW, image=self.tk_image)

        self.start_x = None
        self.start_y = None
        self.rect = None

        self.canvas.bind("<ButtonPress-1>", self.on_button_press)
        self.canvas.bind("<B1-Motion>", self.on_move_press)
        self.canvas.bind("<ButtonRelease-1>", self.on_button_release)

        tk.Label(root, text="Click and drag a rectangle over the 'Heffernan' text to erase it.").pack()

    def on_button_press(self, event):
        self.start_x = event.x
        self.start_y = event.y
        if self.rect:
            self.canvas.delete(self.rect)
        self.rect = self.canvas.create_rectangle(self.start_x, self.start_y, self.start_x, self.start_y, outline='red', width=2)

    def on_move_press(self, event):
        cur_x, cur_y = (event.x, event.y)
        self.canvas.coords(self.rect, self.start_x, self.start_y, cur_x, cur_y)

    def on_button_release(self, event):
        end_x, end_y = (event.x, event.y)
        
        # Convert coordinates back to original image scale
        left = int(min(self.start_x, end_x) / self.ratio)
        right = int(max(self.start_x, end_x) / self.ratio)
        top = int(min(self.start_y, end_y) / self.ratio)
        bottom = int(max(self.start_y, end_y) / self.ratio)
        
        if right - left < 5 or bottom - top < 5:
            return # too small

        # Get average color of the border of the selection to use as fill color
        border_pixels = []
        for x in range(left, right):
            border_pixels.append(self.original_image.getpixel((x, top)))
            border_pixels.append(self.original_image.getpixel((x, bottom - 1)))
        for y in range(top, bottom):
            border_pixels.append(self.original_image.getpixel((left, y)))
            border_pixels.append(self.original_image.getpixel((right - 1, y)))
            
        avg_color = tuple(sum(col) // len(border_pixels) for col in zip(*border_pixels))
        
        draw = ImageDraw.Draw(self.original_image)
        draw.rectangle([left, top, right, bottom], fill=avg_color)
        
        self.original_image.save(self.image_path)
        print("Logo erased and texture saved successfully! You can close this window.")
        self.root.quit()

if __name__ == "__main__":
    root = tk.Tk()
    root.title("Erase Logo from Texture")
    app = ImagePatcher(root, 'static/models/Computer/baked_computer.jpg')
    root.mainloop()
