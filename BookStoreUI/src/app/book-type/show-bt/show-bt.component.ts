import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bt',
  templateUrl: './show-bt.component.html',
  styleUrls: ['./show-bt.component.css']
})
export class ShowBtComponent implements OnInit {

  constructor(private service: SharedService) { }

  BookTypeList: any=[];

  ModalTitle:string;
  ActivateAddEditBookTypeComp:boolean=false;
  booktyp:any;

  ngOnInit(): void {
    this.refreshBookTypList();
  }

  addClick(){
    this.booktyp={
      ID:0,
      BookCategory:"",
      Name:""
    }

    this.ModalTitle="Add Book Type";
    this.ActivateAddEditBookTypeComp=true;
  }

  closeClick(){
    this.ActivateAddEditBookTypeComp=false;
    this.refreshBookTypList();
  }

  editClick(item){
    this.booktyp=item;
    this.ModalTitle="Edit Book Type";
    this.ActivateAddEditBookTypeComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteBookTyp(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshBookTypList();
      });
    }
  }

  refreshBookTypList(){
    //subscribe() => yanit alana kadar beklemesini saglar
    this.service.getBookTypList().subscribe(data =>{
      this.BookTypeList = data;
    });
  }

}
