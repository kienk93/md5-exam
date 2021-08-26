import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookListComponent} from '../../component/book-list/book-list.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BookCreateComponent} from '../../component/book-create/book-create.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookEditComponent} from '../../component/book-edit/book-edit.component';
import {BookDeleteComponent} from '../../component/book-delete/book-delete.component';
import {BookViewComponent} from '../../component/book-view/book-view.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookViewComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookModule { }
