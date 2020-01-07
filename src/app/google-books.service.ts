import { Book } from './models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.API_PATH}?q=${queryTitle}`);
  }

}
