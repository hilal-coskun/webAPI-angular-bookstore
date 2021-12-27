import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-ct',
  templateUrl: './show-ct.component.html',
  styleUrls: ['./show-ct.component.css']
})
export class ShowCtComponent implements OnInit {

  constructor(private service: SharedService) { }

  ContactList:any =[];
  ModalTitle: string;
  ActivateAddEditContactComp : boolean=false;
  contct:any;

  NameFilter : string="";
  ContactListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshContactList();
  }


  closeClick(){
    this.ActivateAddEditContactComp=false;
    this.refreshContactList();
  }

  addClick(){
    this.contct = {
      ID:0,
      Name:"",
      Mobile:"",
      Title:"",
      Email:""
    }

    this.ModalTitle="Add Contact";
    this.ActivateAddEditContactComp=true;
  }

  editClick(item){
    this.contct = item;
    this.ModalTitle="Edit Contact";
    this.ActivateAddEditContactComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteContact(item.ID).subscribe(data => {
        alert(data.toString());
        this.refreshContactList();
      });
    }
  }

  refreshContactList(){
    this.service.getContactList().subscribe(data =>{
      this.ContactList = data;
      this.ContactListWithoutFilter = data;
    });
  }

  FilterFn(){
    var NameFilter = this.NameFilter;
    this.ContactList = this.ContactListWithoutFilter.filter(function(el){
      return el.Name.toString().toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      )
    });
  }

}
