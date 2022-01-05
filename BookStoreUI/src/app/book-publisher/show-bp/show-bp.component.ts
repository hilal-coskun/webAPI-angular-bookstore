import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bp',
  templateUrl: './show-bp.component.html',
  styleUrls: ['./show-bp.component.css']
})
export class ShowBpComponent implements OnInit {

  constructor(private service : SharedService) { }

  BookPublisherList:any[];

  ModalTitle:string;
  ActivateAddEditBookPubComp : boolean = false;
  bookpubls:any;

//  NameFilter : string="";
  BookPublshrWithoutFilter : any = [];


  ngOnInit(): void {
    this.refreshBookPublshrList();
  }

  addClick(){
    this.bookpubls = {
      ID: 0,
      Contact :"",
      About:""
    }
  
    this.ModalTitle = "Add Book Publisher";
    this.ActivateAddEditBookPubComp = true;
  }

  closeClick(){
    this.ActivateAddEditBookPubComp = false;
    this.refreshBookPublshrList();
  }

  editClick(item){
    this.bookpubls = item;
    this.ModalTitle = "Edit Book Publisher";
    this.ActivateAddEditBookPubComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure ?')){
      this.service.deleteBookCtg(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshBookPublshrList();
      });
    }
  }
  
  refreshBookPublshrList(){
    this.service.getBookPblList().subscribe(data => {
      this.BookPublisherList = data;
      this.BookPublshrWithoutFilter = data;
    });
  }

}
