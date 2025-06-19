import json

class Book:
    def __init__(self, title: str, author: str, year: int):
        self.title = title
        self.author = author
        self.year = year
        print('self :', self)
        print('self.__dict__ : ', self.__dict__)
        print('\n\n')

    def get_info(self):
        return f"{self.title} by {self.author} ({self.year})"


class Ebook(Book):
    def __init__(self, title: str, author: str, year: int, file_format: str):
        super().__init__(title, author, year)
        self.file_format = file_format
        print('self :', self)
        print('self.__dict__ : ', self.__dict__)
        print('\n\n')

    def get_info(self):
        return f"{self.title} (Ebook - {self.file_format}) by {self.author} ({self.year})"


class BookManager:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def list_books(self):
        if not self.books:
            print("No books available.")
        for book in self.books:
            print(book.get_info())
            print('\n\n')


    def remove_book(self, title: str):
        self.books = [book for book in self.books if book.title != title]


    def save_to_file(self, path: str):
        print('self.books :',self.books)
        for book in self.books:
            print('book : ',book)
            print('book.__dict__ : ', book.__dict__)
        data = [book.__dict__ for book in self.books]
        print('data :', data)
        for i, book in enumerate(self.books):
            data[i]['type'] = book.__class__.__name__
        print('\n\n')
        
        with open(path, 'w') as f:
            json.dump(data, f, indent=2)

    def load_from_file(self, path: str):
        with open(path, 'r') as f:
            data = json.load(f)
        self.books = []
        print('*'*80)
        print('\n\n\nself.books :',self.books)
        for item in data:
            if item['type'] == 'Book':
                self.books.append(Book(item['title'], item['author'], item['year']))
            elif item['type'] == 'Ebook':
                self.books.append(Ebook(item['title'], item['author'], item['year'], item['file_format']))
        print('self.books :',self.books)
        for book in self.books:
            print('book : ',book)
            print('book.__dict__ : ', book.__dict__)