import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tr',
  templateUrl: './show-tr.component.html',
  styleUrls: ['./show-tr.component.css']
})
export class ShowTrComponent implements OnInit {

  constructor(private service : SharedService) { }

  TransltList: any=[];

  ModalTitle: string;
  ActivateAddEditTransltComp:boolean=false;
  trnsltr : any;

  NameFilter: string="";
  TransltListListWithoutFilter: any=[];

  ngOnInit(): void {
    this.refreshTransltrList();
  }

  addClick(){
    this.trnsltr={
      ID:0,
      Name:"",
      About:""
    }

    this.ModalTitle="Add Translator";
    this.ActivateAddEditTransltComp=true;
  }

  closeClick(){
    this.ActivateAddEditTransltComp=false;
    this.refreshTransltrList();
  }

  editClick(item){
    this.trnsltr=item;
    this.ModalTitle="Edit Translator";
    this.ActivateAddEditTransltComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteTranslator(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshTransltrList();
      })
    }
  }

  refreshTransltrList(){
    this.service.getTranslatorList().subscribe(data => {
      this.TransltList = data;
      this.TransltListListWithoutFilter = data;
    });
  }

  FilterFn(){
    var NameFilter = this.NameFilter;
    this.TransltList = this.TransltListListWithoutFilter.filter(function(el){
      return el.Name.toString().toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      )
    });
  }

}
