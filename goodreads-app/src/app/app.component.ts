import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Books } from './books';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bookSearch: string;
  books: Array<Books>;
  pageNumber = 1;
  constructor (private bookService: BookService) { }

  ngOnInit(){

  }

  searchBooks(){
    this.bookService.get(this.bookSearch).subscribe( (data: any) => this.assignData(data));
  }

  private assignData(data){
    this.books = new Array<Books>();
    if (data && data.length > 0 && data[0].results && data[0].results.length > 0 && data[0].results[0].work) {
      const searchResult = Object.assign([], data[0].results[0].work);
      //Assigning book to object
      for ( const result of searchResult) {
        const book = new Books();
        if (result.best_book && result.best_book.length > 0) {
          const best_book = result.best_book[0];
          book.rating = result.average_rating;
          book.id = best_book.id;
          book.title = best_book.title;
          book.imgUrl = best_book.small_image_url;
          book.author = best_book.author.name;
        }
        this.books.push(book);
      }
    }
  }
}
