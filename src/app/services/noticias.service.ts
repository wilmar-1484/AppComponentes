import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  getTopHeadLines(){
  const urlNoticias=`https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=844eed82b3714758a188f852fa963d59`
  return this.http.get(urlNoticias);
}
}

