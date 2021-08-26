import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
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
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    })
  }
  updateBook(id: number){
    const book = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/books/list']);
    },error => {
      console.log(error)
    })
  }


}
