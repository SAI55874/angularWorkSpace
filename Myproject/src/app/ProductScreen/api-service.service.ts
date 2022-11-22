import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {  }

  addProduct(data : any)
   {

    console.log(data)
     return this.http.post<any>("http://localhost:8088/api/addProduct",data)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

   getProduct()
   {
     
     return this.http.get<any>("http://localhost:8088/api/allProduct/")
     .pipe(map((res:any)=>{
       return res;
     }))
   }
   
   getProductById(productName:String)
   { 
     return this.http.get<any>("http://localhost:8088/api/getProduct/"+productName)
     .pipe(map((res:any)=>{
       return res;
     }))
   }




  //  updateProject(data :any, projectid : number)
  //  {
     
  //    return this.http.put<any>("http://localhost:8080/api/updateProject/"+projectid,data)
  //    .pipe(map((res:any)=>{
  //      return res;
  //    }))
  //  }

  //  deleteProject(projectid : number)
  //  {
  //    return this.http.delete<any>("http://localhost:8080/api/deleteProject/"+projectid)
  //    .pipe(map((res:any)=>{
  //      return res;
  //    }))
  //  }
}
