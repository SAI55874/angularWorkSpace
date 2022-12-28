import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private baseURL = "http://localhost:8080/api/v1/employees";
  
  constructor( private http : HttpClient) { }
  postEmploye(data : any){
    return this.http.post<any>(this.baseURL, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // getEmploye(){
  //   return this.http.get<any>(this.baseURL)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getEmploye(): Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(`${this.baseURL}`);
  }

  updateEmployee( data:any,id:number){
    return this.http.put<any>(this.baseURL+"/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteEmployee( id:number){
    return this.http.delete<any>(this.baseURL+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
