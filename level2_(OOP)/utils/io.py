from models.manager import *
import json

class IO:
    def __init__(self, manager, path: str):
        self.manager = manager  # ✅ เชื่อมกับ BookManager โดยตรง
        self.path = path

    def save_to_file(self):
        books = self.manager.books
        print("books : ", books)

        for book in books:
            print("book.__dict__ : ", book.__dict__)
        
        data = [book.__dict__.copy() for book in books]
        print("data : ", data)

        for i, book in enumerate(books):
            data[i]['type'] = book.__class__.__name__

        with open(self.path, 'w') as f:
            json.dump(data, f, indent=2)

        print(f"✅ บันทึกไฟล์ที่ {self.path}")

    def load_from_file(self):
        with open(self.path, 'r') as f:
            data = json.load(f)

        self.manager.books = []  # ⛔ clear ก่อน
        print("self.manager.books : ",  self.manager.books)

        for item in data:
            if item['type'] == 'Book':
                self.manager.books.append(Book(item['title'], item['author'], item['year']))
            elif item['type'] == 'Ebook':
                self.manager.books.append(Ebook(item['title'], item['author'], item['year'], item['file_format']))
        
        print("self.manager.books : ",  self.manager.books)
        print(f"✅ โหลดข้อมูลจาก {self.path} แล้ว")