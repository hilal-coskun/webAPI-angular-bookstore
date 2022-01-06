import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bk',
  templateUrl: './show-bk.component.html',
  styleUrls: ['./show-bk.component.css']
})
export class ShowBkComponent implements OnInit {

  constructor(private service : SharedService) { }

  BookList:any=[];

  ModalTitle:string;
  ActivateAddEditBookComp: boolean = false;
  book:any;



  ngOnInit(): void {
    this.refreshBookList();
  }

  addClick(){
    this.book={
      ID:0,
      Name:"",
      Blurb:"",
      BookCategoryID:0,
      BookTypeID:0,
      LanguageID:0,
      TranslatorID:0,
      AuthorID:0,
      Price:0,
      ISBN:0,
      AmountOfStock:0,
      PagesOfNumber:"",
      Size:"",
      Picture:""
    }

    this.ModalTitle="Add Book";

    this.ActivateAddEditBookComp=true;
  }


  closeClick(){
    this.ActivateAddEditBookComp=false;
    this.refreshBookList();
  }


  deleteClick(item){
    if(confirm('Are you sure ?')){
      this.service.deleteBook(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshBookList();
      });
    }
  }

  editClick(item){
    this.book=item;
    this.ModalTitle="Edit Book";
    this.ActivateAddEditBookComp=true;
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data =>{
      this.BookList = data;
    });
  }

}
