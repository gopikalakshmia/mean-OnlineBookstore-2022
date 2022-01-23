import { BookModel } from './../models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }

  getBooks(){
    // new HttpClient();
    // calling api. (client->server communication)
    return this.http.get("http://localhost:3100/api/Book")
      .pipe(map((res: any)=> res));
  }
}

