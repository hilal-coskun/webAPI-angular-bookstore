import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tr',
  templateUrl: './add-edit-tr.component.html',
  styleUrls: ['./add-edit-tr.component.css']
})
export class AddEditTrComponent implements OnInit {

  constructor(private service :SharedService) { }

  @Input() trnsltr:any;
  ID:number;
  Name: string;
  About: string;

  ngOnInit(): void {
    this.ID = this.trnsltr.ID;
    this.Name = this.trnsltr.Name;
    this.About = this.trnsltr.About;
  }

  addTranslator(){
    var val = {
      ID:this.ID,
      Name:this.Name,
      About: this.About
    };
    this.service.addTranslator(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateTranslator(){
    var val  ={
      ID: this.ID,
      Name: this.Name,
      About: this.About
    };
    this.service.updateTranslator(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
