import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookAuthor = 'aaa';
  books = [];
  bookAllowed = false;

  onCreateNewBook() {
    this.books.push(this.bookAuthor);
  }

  onChangeBookValidity() {
    this.bookAllowed = !this.bookAllowed
  }

  getBookValidity() {
    return this.bookAllowed === true ? 'allowed' : 'not allowed'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
