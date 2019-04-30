import { Component, OnInit } from '@angular/core';
import { dictionaryService } from '../services/dictionary.service';
import {Observable} from 'rxjs';
import {RootObject} from '../models/book'

import 'hammerjs';


@Component({
  selector: 'my-app',
  templateUrl: '../books/book-detail.component.html',
  styleUrls: [ '../books/book-detail.component.css' ]
})
export class BookDetailComponent  {

 private rootobjects: RootObject[] = [];
 private rootobjectsObservable: Observable<any[]>;

 private rootobjectsObservableSearch: Observable<any[]>;

 private isDetails: boolean = false;

 selectedBook: RootObject;





  constructor(private _dictionaryService: dictionaryService){


    this.rootobjectsObservable = this._dictionaryService.getBooks();
    
  
  }

  ngOnInit(){
    console.log(this._dictionaryService.getSearchBook("A Game Of Thrones"))
  }

  getSearchBook(val: string){
      this.rootobjectsObservableSearch = this._dictionaryService.getSearchBook(val);
    
  }

  getBooks(book: RootObject){
    this.isDetails = true;
    this.selectedBook = book;
    //console.log("xxx")
  }

  goBack(){
    this.isDetails = false;
    this.selectedBook = null;
  }

 
}
