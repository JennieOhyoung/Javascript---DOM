var BookList = function() {
    this.booksRead = 0;
    this.booksNotRead = 0;
    this.nextBook = function() {
        for (var i = 0; i < this.bookShelf.length; i++) {
            var book = this.bookShelf[i];
            if (!book.read && book !== this.currentBook) {
                return book;
            }
        }
        return null;
    };
    this.currentBook = null;
    this.lastBook = null;
    this.bookShelf = [];
    this.add = function(book) {
        this.bookShelf.push(book);
        if (book.read) {
            this.booksRead += 1;
        } else {
            this.booksNotRead += 1;
        }
    };
    this.finishCurrentBook = function() {
        if (this.currentBook !== null) {
            this.currentBook.readIt();
            this.lastBook = this.currentBook;
        }
        this.currentBook = this.nextBook();
    };
};

var Book = function(title, genre, author, image) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.readDate = null;
    this.image = image;
    this.url = null;
    this.readIt = function() {
        this.read = true;
        this.readDate = new Date();
    };
};



var addParagraphs = function(listOfBooks) {
    var ul = document.createElement("ul");
    for (var i = 0; i < listOfBooks.bookShelf.length; i++) {
        var li = document.createElement("li");
        var ourBook = document.createTextNode(listOfBooks.bookShelf[i].title);
        var img = document.createElement("img");
        console.log(listOfBooks.bookShelf[i].image);
        img.setAttribute("src",listOfBooks.bookShelf[i].image);
        img.width = 200;
        li.appendChild(ourBook);
        li.appendChild(img);
        ul.appendChild(li);
        ul.appendChild(img);
    }
    document.body.appendChild(ul);

};



var booklist1 = new BookList();
var book1 = new Book("Harry Potter", "fantasy", "R.J. Rowling", "http://www.openflame.com/harrypotter/harry_images/covers/book4/hp4_b.jpg");
var book2 = new Book("Art of War", "strategy", "Sun Zi", "http://www.penguin.com.au/jpg-large/9780140455526.jpg");
var book3 = new Book("1984", "fiction", "George Orwell", "http://www.creativereview.co.uk/images/uploads/2008/04/1984thumb.jpg");
var book4 = new Book("The Bible", "religion", "various", "http://thewrittenwordreviews.files.wordpress.com/2009/03/holy-bible-cover.jpg");

booklist1.add(book1);
booklist1.add(book2);
booklist1.add(book3);
booklist1.add(book4);

addParagraphs(booklist1);



