import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
const API_URL = `${environment.apiURL}`
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(API_URL + '/books');
  }
  createBook(book: object): Observable<Book>{
    return this.httpClient.post<Book>(API_URL + '/books',book)
  }
  findById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${API_URL}/books/${id}`)
  }
  updateBook(id: number,book: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${API_URL}/books/${id}`,book)
  }
  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${API_URL}/books/${id}`)
  }


}
