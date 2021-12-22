import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bc',
  templateUrl: './show-bc.component.html',
  styleUrls: ['./show-bc.component.css']
})

export class ShowBcComponent implements OnInit {

  constructor(private service:SharedService) { }

  //Bu diziyi verileri listeyecegimiz sayfada ngFor ile kullanacagiz.
  BookCatList:any=[];

  ModalTitle:string;
  ActivateAddEditBookCatComp:boolean=false;
  bookcat:any; 


  NameFilter: string="";
  BookCatListWithoutFilter:any=[];


  //yenileme
  ngOnInit(): void {
    this.refreshBookCatList();
  }

  //Add department butonu aktif etme
  addClick(){
    this.bookcat={
      ID:0,
      Name:""
    }

    //Title değişkeni (modal içindeki)
    this.ModalTitle="Add Book Category";
    //add fonksiyonu aktif etme
    this.ActivateAddEditBookCatComp=true;
  }

  //Modal görüntüsünü pasif etme
  closeClick(){
    this.ActivateAddEditBookCatComp=false;
    this.refreshBookCatList();

  }

  editClick(item){
    this.bookcat=item;
    this.ModalTitle="Edit Book Category";
    this.ActivateAddEditBookCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure ?')){
      this.service.deleteBookCtg(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshBookCatList();
      });
    }
  }


  refreshBookCatList(){
    //subscribe() => yanit alana kadar beklemesini saglar
    this.service.getBookCtgList().subscribe(data =>{
      this.BookCatList = data;
      this.BookCatListWithoutFilter= data;
    });
  }

  FilterFn(){
    var NameFilter= this.NameFilter;
    this.BookCatList= this.BookCatListWithoutFilter.filter(function (el){
      return el.Name.toString().toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      )
    });
  }

}
