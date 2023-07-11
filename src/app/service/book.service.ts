import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResult } from '../models/BookInterfaces';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  search(value: string): Observable<BookResult> {
    const params = new HttpParams().append('q', value);
    return this.http.get<BookResult>(this.API, { params });
  }
}
