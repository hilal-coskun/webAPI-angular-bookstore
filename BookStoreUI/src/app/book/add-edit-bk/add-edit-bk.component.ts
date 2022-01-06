import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bk',
  templateUrl: './add-edit-bk.component.html',
  styleUrls: ['./add-edit-bk.component.css']
})
export class AddEditBkComponent implements OnInit {

  constructor(private service : SharedService) { }


  @Input() book:any;
  ID:number;
  BookCategoryID:string;
  BookTypeID:string;
  LanguageID:string;
  AuthorID:string;
  TranslatorID:string;
  PaperTypeID:string;
  Price:number;
  ISBN:number;
  AmountOfStock:number;
  PagesOfNumber:string;
  Size:string;
  Picture:string;

  BookCategoryList:any = [];
  BookTypeList:any = [];
  LanguageList:any = [];
  AuthorList:any = [];
  TranslatorList:any=[];
  PaperTypeList:any=[];
  BookPublisherList:any=[];
  
  ngOnInit(): void {
    this.loadBookCatList();
    this.loadBookTypList();
    this.loadLanguageList();
    this.loadAuthorList();
    this.loadTranslatorList();
    this.loadPaperTypeList();
    this.loadBookPublis();
  }

  loadBookCatList(){
    this.service.getAllBookCategories().subscribe((data:any) =>{
      this.BookCategoryList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadBookTypList(){
    this.service.GetAllBookType().subscribe((data:any) =>{
      this.BookTypeList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadLanguageList(){
    this.service.GetAllLanguage().subscribe((data:any) =>{
      this.LanguageList=data;
      
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadAuthorList(){
    this.service.GetAllAuthor().subscribe((data:any) =>{
      this.AuthorList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadTranslatorList(){
    this.service.GetAllTranslator().subscribe((data:any) =>{
      this.TranslatorList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadPaperTypeList(){
    this.service.GetAllPaperType().subscribe((data:any) =>{
      this.PaperTypeList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }

  loadBookPublis(){
    this.service.GetAllBookPublishers().subscribe((data:any) =>{
      this.BookPublisherList=data;
      
      this.ID = this.book.ID;
      this.BookCategoryID = this.book.BookCategoryID;
      this.BookTypeID = this.book.BookTypeID;
      this.LanguageID = this.book.LanguageID;
      this.AuthorID = this.book.AuthorID;
      this.TranslatorID = this.book.TranslatorID;
      this.Price = this.book.Price;
      this.ISBN = this.book.ISBN;
      this.AmountOfStock = this.book.AmountOfStock;
      this.PagesOfNumber = this.book.PagesOfNumber;
      this.Size = this.book.Size;
      this.Picture = this.book.Picture;
    })
  }


  addBook(){
    var val = {
      ID : this.book.ID,
      BookCategoryID : this.book.BookCategoryID,
      BookTypeID : this.book.BookTypeID,
      LanguageID : this.book.LanguageID,
      AuthorID : this.book.AuthorID,
      TranslatorID : this.book.TranslatorID,
      Price : this.book.Price,
      ISBN : this.book.ISBN,
      AmountOfStock : this.book.AmountOfStock,
      PagesOfNumber: this.book.PagesOfNumber,
      Size : this.book.Size,
      Picture : this.book.Picture
    };
    this.service.addBook(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateBook(){
    var val={
      ID : this.book.ID,
      BookCategoryID : this.book.BookCategoryID,
      BookTypeID : this.book.BookTypeID,
      LanguageID : this.book.LanguageID,
      AuthorID : this.book.AuthorID,
      TranslatorID : this.book.TranslatorID,
      Price : this.book.Price,
      ISBN : this.book.ISBN,
      AmountOfStock : this.book.AmountOfStock,
      PagesOfNumber: this.book.PagesOfNumber,
      Size : this.book.Size,
      Picture : this.book.Picture
    };
    this.service.updateBook(val).subscribe(res =>{
      alert(res.toString());
    });
  }
}
