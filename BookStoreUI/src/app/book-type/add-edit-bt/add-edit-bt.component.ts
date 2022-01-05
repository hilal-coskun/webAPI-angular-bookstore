import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bt',
  templateUrl: './add-edit-bt.component.html',
  styleUrls: ['./add-edit-bt.component.css']
})
export class AddEditBtComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() booktyp:any;
  ID:number;
  BookCategoryItem:string;
  BookCategoryID:string;
  Name:string;

  BookCategoryList:any=[];


  ngOnInit(): void {
    this.loadBookCategoryList();
  }

  loadBookCategoryList(){
    this.service.getAllBookCategories().subscribe((data:any) =>{
      this.BookCategoryList=data;
      
      console.log(this.BookCategoryList);
      this.ID = this.booktyp.ID;
      this.BookCategoryID = this.booktyp.BookCategoryID;
      this.Name = this.booktyp.Name;
    })
  }


  addBookType(){
    var val = {
      ID:this.ID,
      BookCategoryID : this.BookCategoryID,
      Name: this.Name
    };
    this.service.addBookTyp(val).subscribe(res =>{
      //alert(res.toString());
    });
  }

  updateBookType(){
    var val={
      ID:this.ID,
      BookCategoryID : this.BookCategoryID,
      Name: this.Name
    };
    this.service.updateBookTyp(val).subscribe(res =>{
      alert(res.toString());
    });
  }

}
