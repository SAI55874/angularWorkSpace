import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Product} from '../shoppimg/shopping'
import { Image } from '../gallery/Image'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  productNames: string[] = []
  status: string[] = []
  constructor(private http : HttpClient) { }

  getNews(){
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=2f367f5840c640428d3935a361fc21cb")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  getImages(){
    return this.http.get<any>("https://picsum.photos/v2/list?page=2&limit=20")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getImagess() {
    return this.http.get<any>('https://picsum.photos/v2/list?page=2&limit=20')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }

  getItems(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}