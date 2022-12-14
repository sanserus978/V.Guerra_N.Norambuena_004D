import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpclient: HttpClient) { }

  getTopHeadLines(){
    return (this.httpclient.get('https://jsonplaceholder.typicode.com/comments'));

  }
}
