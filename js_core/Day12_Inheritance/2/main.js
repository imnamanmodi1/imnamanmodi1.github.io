// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness && Write methods that increase and decrease those properties. && Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
var catProp = {
    tiredness: 0,
    hunger : 0,
    loneliness : 0,
    happiness : 0,

    increaseProperties() {
        this.tiredness++;
        this.hunger++;
        this.lonliness++;
        this.happiness++;
    },
    
    decreaseProperties(){
        this.tiredness--;
        this.hunger--;
        this.lonliness--;
        this.happiness--;
    },
    catTirednessStatus(){
        this.tiredness > 0 ? 'cat is not tired' : 'cat is tired';
      },   
      catHungerStatus() {
        this.hunger > 0 ? 'cat is not hungry' : 'cat is hungry';
      },
      catLonlynessStatus(){
        this.lonliness > 0 ? 'cat is not lonely': 'cat is lonly';
      },
      catHappiness(){
        this.happiness > 0 ? 'cat is happy' : 'cat is not happy';
      },
      changeProperty(tiredness,hunger,lonliness,happiness){
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.happiness = happiness;
        this.lonliness = lonliness;
      }
}


// 2nd
// An object-oriented book-list!
// Create a class BookList
// Create another class called Book
// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books
class Booklist {
    constructor() {
      this.bookArray = [];
      this.read_count = 0;
      this.not_read = 0;
      this.next_book;
      this.current_book = 0;
      this.last_book = 0;
    }
    add(book) {
      this.bookArray.push(book);
      this.updateStatus();
    }
    updateStatus() {
      this.next_book = this.nextUnreadBook();
      this.read_count = 0;
      (this.bookArray).forEach((v, i) => {
        if (v.readState) this.read_count++;
      });
      this.not_read = this.bookArray.length - this.read_count;
    }
  
    finishCurrentBook() {
      if(!this.next_book) {
        console.log("BookList is Empty Add more Books to Read");
        return;
      }
      this.bookArray[this.current_book].readState = true;
      this.bookArray[this.current_book].readDate = new Date(Date.now());
      this.last_book = this.current_book;
      this.current_book = this.next_book;
      this.next_book = this.nextUnreadBook();
      this.updateStatus();
    }
    nextUnreadBook() {
      var index;
      for (let i = 0; i < this.bookArray.length; i++) {
        if (this.bookArray[i].readState == false && i != this.current_book) {
          index = i;
          break;
        }
      }
      return index;
    }
  
  }
  // Create another class called Book
  class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.readState = false;
      this.readDate;
    }
  }
  let library = new Booklist();
  let b1 = new Book("s", "sw", "swd");
  library.add(b1);
  let b2 = new Book("se", "sew", "sewd");
  library.add(b2);
  let b3 = new Book("sr", "srw", "rswd");
  library.add(b3);
  let b4 = new Book("sh", "shw", "hswd");
  library.add(b4);