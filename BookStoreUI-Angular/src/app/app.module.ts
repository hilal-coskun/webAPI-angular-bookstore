import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { BookTypeComponent } from './book-type/book-type.component';
import { AddEditBcComponent } from './book-category/add-edit-bc/add-edit-bc.component';
import { ShowBtComponent } from './book-type/show-bt/show-bt.component';
import { ShowBcComponent } from './book-category/show-bc/show-bc.component';
import { AddEditBtComponent } from './book-type/add-edit-bt/add-edit-bt.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookTypeComponent,
    AddEditBcComponent,
    ShowBcComponent,
    ShowBtComponent,
    AddEditBtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
