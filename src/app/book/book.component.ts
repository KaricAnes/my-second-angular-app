import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookAuthor = 'aaa';
  books = [];

  onCreateNewBook() {
    this.books.push(this.bookAuthor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
