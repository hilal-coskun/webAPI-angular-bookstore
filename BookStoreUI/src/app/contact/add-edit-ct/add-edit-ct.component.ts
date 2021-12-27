import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ct',
  templateUrl: './add-edit-ct.component.html',
  styleUrls: ['./add-edit-ct.component.css']
})
export class AddEditCtComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() contct: any;
  ID:number;
  Title:string;
  Mobile:string;
  Email:string;
  Name: string;

  ngOnInit(): void {
    this.ID = this.contct.ID;
    this.Title = this.contct.Title;
    this.Mobile = this.contct.Mobile;
    this.Email = this.contct.Email;
    this.Name = this.contct.Name;
  }

  addContact(){
    var val ={
      ID: this.ID,
      Title : this.Title,
      Mobile: this.Mobile,
      Email : this.Email,
      Name : this.Name
    };
    this.service.addContact(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateContact(){
    var val = {
      ID: this.ID,
      Title : this.Title,
      Mobile: this.Mobile,
      Email : this.Email,
      Name : this.Name
    };

    this.service.updateContact(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
