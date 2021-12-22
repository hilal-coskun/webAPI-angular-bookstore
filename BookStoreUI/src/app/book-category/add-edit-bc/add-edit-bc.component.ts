import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bc',
  templateUrl: './add-edit-bc.component.html',
  styleUrls: ['./add-edit-bc.component.css']
})
export class AddEditBcComponent implements OnInit {

  constructor(private service:SharedService) { }

  //Giris yönergesi 
  @Input() bookcat:any;
  ID:number;
  Name:string;
  

  ngOnInit(): void {
    this.ID=this.bookcat.ID;
    this.Name=this.bookcat.Name;
  }

  addBookCategory(){
    var val = {ID:this.ID,
               Name:this.Name};
    this.service.addBookCtg(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBookCategory(){
    console.log(this.bookcat) 
    var val = {ID: this.ID,
               Name: this.Name};
    this.service.updateBookCtg(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
