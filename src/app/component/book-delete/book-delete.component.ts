import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(urlId => {
      // @ts-ignore
      this.id = +urlId.get('id');
      this.getBook(this.id)

    })
  }
  getBook(id: number){
    this.bookService.findById(id).subscribe(book => {
      console.log(book);
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      })
    })
  }
  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate(['/books/list'])
    },error => {
      console.log(error)
    })
  }

}
