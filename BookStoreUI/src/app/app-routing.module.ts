import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCategoryComponent } from './book-category/book-category.component';
import { BookTypeComponent } from './book-type/book-type.component';
import { TranslatorComponent } from './translator/translator.component';

const routes: Routes = [
  {path:'bookcategory', component:BookCategoryComponent},
  {path:'booktype', component: BookTypeComponent},
  {path:'translator', component:TranslatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
