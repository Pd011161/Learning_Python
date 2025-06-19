from models.manager import *
from utils.io import *

def main():
    manager = BookManager()
    io = IO(manager, "output/books.json")
    # เพิ่มหนังสือ
    book1 = Book("Python 101", "John Doe", 2020)
    ebook1 = Ebook("Fast Python", "Jane Smith", 2022, "PDF")

    manager.add_book(book1)
    manager.add_book(ebook1)

    # แสดงหนังสือทั้งหมด
    print("\n📚 รายการหนังสือทั้งหมด:")
    manager.list_books()

    # บันทึกไฟล์
    io.save_to_file()
    print("\n✅ บันทึกไฟล์เรียบร้อยแล้ว")

    # โหลดข้อมูลใหม่จากไฟล์
    io.load_from_file()
    print("\n🔄 โหลดข้อมูลจากไฟล์:")
    manager.list_books()


if __name__ == "__main__":
    main()
