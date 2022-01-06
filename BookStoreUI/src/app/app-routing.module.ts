import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BookPublisherComponent } from './book-publisher/book-publisher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCategoryComponent } from './book-category/book-category.component';
import { BookTypeComponent } from './book-type/book-type.component';
import { ContactComponent } from './contact/contact.component';
import { TranslatorComponent } from './translator/translator.component';

const routes: Routes = [
  {path:'bookcategory', component:BookCategoryComponent},
  {path:'booktype', component: BookTypeComponent},
  {path:'translator', component:TranslatorComponent},
  {path:'contact', component:ContactComponent},
  {path: 'bookpublisher', component:BookPublisherComponent},
  {path: 'book', component:BookComponent},
  {path: 'author', component:AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
