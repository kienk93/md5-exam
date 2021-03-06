import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.bookService.getAll().subscribe(books => {
      this.books = books
    }, error => {
      console.log(error)
    })
  }
}
