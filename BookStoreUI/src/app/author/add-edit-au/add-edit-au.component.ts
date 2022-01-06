import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-au',
  templateUrl: './add-edit-au.component.html',
  styleUrls: ['./add-edit-au.component.css']
})
export class AddEditAuComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() author:any;
  ID:number;
  Name:string;
  About:string;
  Logo:string;
  LogoFilePath:string;
  RecordDate:Date;

  ngOnInit(): void {
  }

  addAuthor(){
    var val = {
      ID:this.ID,
      Name : this.Name,
      About: this.About,
      Logo:this.Logo,
      RecordDate : this.RecordDate
    };
    this.service.addAuthor(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateAuthor(){
    var val={
      ID:this.ID,
      Name : this.Name,
      About: this.About,
      Logo:this.Logo,
      RecordDate : this.RecordDate
    };
    this.service.updateAuthor(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file,file.name);

    this.service.UploadAuthorPhoto(formData).subscribe((data:any) => {
      this.Logo = data.toString();
      this.LogoFilePath= this.service.PhotoUrl + this.Logo;
    })
  }

}
