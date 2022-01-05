import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bp',
  templateUrl: './add-edit-bp.component.html',
  styleUrls: ['./add-edit-bp.component.css']
})
export class AddEditBpComponent implements OnInit {

  constructor(private service : SharedService) { }

  BookPublisherList:any[];

  @Input() bookpubls:any;
  ID:number;
  ContactID:string;
  About:string;

  ContactAllList:any = [];

  ngOnInit(): void {
    this.loadBookPublisherList();
  }

  loadBookPublisherList(){
    this.service.GetAllContact().subscribe((data:any) => {
      this.ContactAllList = data;

      this.ID = this.bookpubls.ID;
      this.ContactID = this.bookpubls.ContactID;
      this.About = this.bookpubls.About;
    })
  }

  addBookPublshr(){
    var val = {
      ID:this.ID,
      ContactID:this.ContactID,
      About:this.About
    };
    this.service.addBookPbl(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBookPublshr(){
    console.log(this.bookpubls) 
    var val = {
      ID: this.ID,
      ContactID:this.ContactID,
      About:this.About
    };
    this.service.updateBookPbl(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
