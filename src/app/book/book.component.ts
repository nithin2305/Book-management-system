import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[] = []; // Array to store books
  newBook: string = ''; // To hold new book title
  newAuthor: string = ''; // To hold new book author
  ID : number=0;

  constructor() {
    // Load books from localStorage on initialization
    const savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.newBook.length && this.newAuthor.length) {
      const newBookDetails: Book = {
        id: this.books.length + 1, // Generate a unique ID based on the array length
        title: this.newBook,
        author: this.newAuthor,
      };

      this.books.push(newBookDetails); // Add the new book to the array

      // Clear the input fields
      this.newBook = '';
      this.newAuthor = '';

      // Save the updated books array to localStorage
      localStorage.setItem('books', JSON.stringify(this.books));
    } else {
      alert('Enter Book details to proceed');
    }
  }



  deletebook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
    alert("Deleted");
  }
  
}
