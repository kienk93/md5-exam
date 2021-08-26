import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

import {Book} from '../../model/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  book: Book = {
    title: '',
    author: '',
    description: ''
  };
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(urlId => {
      // @ts-ignore
      this.id = +urlId.get('id');
      this.getBook(this.id)
    })
  }
  getBook(id: number){
    return this.bookService.findById(id).subscribe(book => {
      this.book = {
        title: book.title,
        author: book.author,
        description: book.description
      }
    })
  }
}
