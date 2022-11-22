import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http : HttpClient) { }
  getDetails(){
    return this.http.get<any>("http://universities.hipolabs.com/search?country=United+Kingdom")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getNews(){
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=2f367f5840c640428d3935a361fc21cb")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

    getAllApis(){
      return this.http.get<any>("https://api.publicapis.org/entries")
      .pipe(map((res:any)=>{
        return res;
      }))
}}
