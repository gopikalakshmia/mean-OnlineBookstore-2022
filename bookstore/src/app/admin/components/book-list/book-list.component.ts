import { BookModel } from 'src/app/book/models/book.model';
import { BookserviceService } from './../../../book/services/bookservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookserviceService) { }
 books:BookModel[];
  ngOnInit(): void {
    const bookObservable=this.bookService.getBooks();
    bookObservable.subscribe(
      (result=>{this.books=result}),
      (err=>{console.log(err);}),
      (()=>{console.log("done");})
    );
  }
 

}
