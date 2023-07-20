import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { BookResult, Item } from '../models/BookInterfaces';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  search(value: string): Observable<Item[]> {
    const params = new HttpParams().append('q', value);
    return this.http.get<BookResult>(this.API, { params })
    .pipe(//pipe aloows to use any other operator
      //tap does not change the previous operator flow, it's just a simple operator
      tap(returnedData => console.log("returnedData: " + JSON.stringify(returnedData))),
      //mapping from BookResult to Item[]. Map transforms the object into other one.
      map(result => result.items)
    );
  }
}
