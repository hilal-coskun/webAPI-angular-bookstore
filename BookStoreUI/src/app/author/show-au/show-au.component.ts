import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-au',
  templateUrl: './show-au.component.html',
  styleUrls: ['./show-au.component.css']
})
export class ShowAuComponent implements OnInit {

  constructor(private service : SharedService) { }

  AuthorList:any = [];

  ModalTitle:string;
  ActivateAddEditAuthorComp:boolean=false;
  author:any;

  ngOnInit(): void {
    this.refreshAuthorList();
  }

  addClick(){
    this.author={
      ID:0,
      Name:"",
      About:"",
      Logo:"",
      RecordDate:""
    }

    this.ModalTitle="Add Author";
    this.ActivateAddEditAuthorComp=true;
  }

  closeClick(){
    this.ActivateAddEditAuthorComp=false;
    this.refreshAuthorList();
  }

  editClick(item){
    this.author=item;
    this.ModalTitle="Edit Author";
    this.ActivateAddEditAuthorComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteAuthor(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshAuthorList();
      });
    }
  }

  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data =>{
      this.AuthorList = data;
    });
  }

}
