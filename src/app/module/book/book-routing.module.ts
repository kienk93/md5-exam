import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from '../../component/book-list/book-list.component';
import {BookCreateComponent} from '../../component/book-create/book-create.component';
import {BookEditComponent} from '../../component/book-edit/book-edit.component';
import {BookDeleteComponent} from '../../component/book-delete/book-delete.component';
import {BookViewComponent} from '../../component/book-view/book-view.component';

const routes: Routes = [{
  path: 'list',
  component: BookListComponent
},{
  path: 'create',
  component: BookCreateComponent
},{
  path: 'edit/:id',
  component: BookEditComponent
},{
  path: 'delete/:id',
  component: BookDeleteComponent
},{
  path: 'view/:id',
  component: BookViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
