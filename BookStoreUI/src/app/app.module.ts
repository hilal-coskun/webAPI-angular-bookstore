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
import { TranslatorComponent } from './translator/translator.component';
import { ShowTrComponent } from './translator/show-tr/show-tr.component';
import { AddEditTrComponent } from './translator/add-edit-tr/add-edit-tr.component';
import { AuthorComponent } from './author/author.component';
import { ShowAuComponent } from './author/show-au/show-au.component';
import { AddEditAuComponent } from './author/add-edit-au/add-edit-au.component';
import { BookPublisherComponent } from './book-publisher/book-publisher.component';
import { AddEditBpComponent } from './book-publisher/add-edit-bp/add-edit-bp.component';
import { ShowBpComponent } from './book-publisher/show-bp/show-bp.component';
import { ContactComponent } from './contact/contact.component';
import { AddEditCtComponent } from './contact/add-edit-ct/add-edit-ct.component';
import { ShowCtComponent } from './contact/show-ct/show-ct.component';
import { BookComponent } from './book/book.component';
import { AddEditBkComponent } from './book/add-edit-bk/add-edit-bk.component';
import { ShowBkComponent } from './book/show-bk/show-bk.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookTypeComponent,
    AddEditBcComponent,
    ShowBcComponent,
    ShowBtComponent,
    AddEditBtComponent,
    TranslatorComponent,
    ShowTrComponent,
    AddEditTrComponent,
    AuthorComponent,
    ShowAuComponent,
    AddEditAuComponent,
    BookPublisherComponent,
    AddEditBpComponent,
    ShowBpComponent,
    ContactComponent,
    AddEditCtComponent,
    ShowCtComponent,
    BookComponent,
    AddEditBkComponent,
    ShowBkComponent
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
