import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const book = this.bookForm.value
    this.bookService.createBook(book).subscribe(()=> {
      this.bookForm.reset();
      this.router.navigate(['/books/list']);
      // alert('Tạo thành công');
    }, error => {
      console.log(error)
    })
  }

}
