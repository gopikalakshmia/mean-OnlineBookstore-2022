import { BookserviceService } from './../../../book/services/bookservice.service';
import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService:BookserviceService) { }
  books:BookModel[];

  ngOnInit(): void {

    this.books=[];
    /*let book:BookModel=new BookModel();
    book.id=1;
    book.name="Kite Runner";
    book.author="Khaled Hosseini";
    book.price=200;
    book.imgSrc="/assets/img/kiterunner.jpg";
    this.books.push(book);
    let book2:BookModel=new BookModel();
    book2.id=2;
    book2.name="Malala";
    book2.author="Malala";
    
    book2.imgSrc="/assets/img/malala.jpg";
    this.books.push(book2);*/

    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.books=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )
  }

}
