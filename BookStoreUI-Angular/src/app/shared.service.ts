import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44375";
  readonly PhotoUrl = "https://localhost:44375/Photos"
  
  constructor(private http:HttpClient) { }

  //BookCategory
  getBookCtgList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/bookcategory');
  }
  addBookCtg(val:any){
    return this.http.post(this.APIUrl+'/bookcategory',val);
  }
  updateBookCtg(val:any){
    return this.http.put(this.APIUrl+'/bookcategory',val);
  }
  deleteBookCtg(val:any){
    return this.http.delete(this.APIUrl+'/bookcategory',val);
  }

  //BookType
  getBookTypList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/booktype');
  }
  addBookTyp(val:any){
    return this.http.post(this.APIUrl+'/booktype',val);
  }
  updateBookTyp(val:any){
    return this.http.put(this.APIUrl+'/booktype',val);
  }
  deleteBookTyp(val:any){
    return this.http.delete(this.APIUrl+'/booktype',val);
  }
  getAllBookCategory():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/booktype/getAllBookCategory');
  }

  //BookPublisher
  getBookPblList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/bookpublisher');
  }
  addBookPbl(val:any){
    return this.http.post(this.APIUrl+'/bookpublisher',val);
  }
  updateBookPbl(val:any){
    return this.http.put(this.APIUrl+'/bookpublisher',val);
  }
  deleteBookPbl(val:any){
    return this.http.delete(this.APIUrl+'/bookpublisher',val);
  }
  GetAllContact():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/bookpublisher/GetAllContact')
  }

  //Contact
  getContactList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/contact');
  }
  addContact(val:any){
    return this.http.post(this.APIUrl+'/contact',val);
  }
  updateContact(val:any){
    return this.http.put(this.APIUrl+'/contact',val);
  }
  deleteContact(val:any){
    return this.http.delete(this.APIUrl+'/contact',val);
  }

  //Book
  getBookList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book');
  }
  addBook(val:any){
    return this.http.post(this.APIUrl+'/book',val);
  }
  updateBook(val:any){
    return this.http.put(this.APIUrl+'/book',val);
  }
  deleteBook(val:any){
    return this.http.delete(this.APIUrl+'/book',val);
  }
  UploadBookPhoto(val:any){
    return this.http.post(this.APIUrl+'/book/savefile',val);
  }
  GetAllBookPublishers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllBookPublishers');
  }
  GetAllTranslator():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllTranslator');
  }
  GetAllAuthor():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllAuthor');
  }
  GetAllLanguage():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllLanguage');
  }
  GetAllPaperType():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllPaperType');
  }
  GetAllBookType():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllBookType');
  }
  GetAllBookCategory():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book/GetAllBookCategory');
  }

  

  //Author
  getAuthorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/author');
  }
  addAuthor(val:any){
    return this.http.post(this.APIUrl+'/author',val);
  }
  updateAuthor(val:any){
    return this.http.put(this.APIUrl+'/author',val);
  }
  deleteAuthor(val:any){
    return this.http.delete(this.APIUrl+'/author',val);
  }
  UploadAuthorPhoto(val:any){
    return this.http.post(this.APIUrl+'/author/savefile',val);
  }

  //Translator
  getTranslatorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/translator');
  }
  addTranslator(val:any){
    return this.http.post(this.APIUrl+'/translator',val);
  }
  updateTranslator(val:any){
    return this.http.put(this.APIUrl+'/translator',val);
  }
  deleteTranslator(val:any){
    return this.http.delete(this.APIUrl+'/translator',val);
  }
  UploadTranslatorPhoto(val:any){
    return this.http.post(this.APIUrl+'/translator/savefile',val);
  }
}
