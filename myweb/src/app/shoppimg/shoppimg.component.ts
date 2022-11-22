import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { MyserviceService } from '../shared/myservice.service';
import {Product} from './shopping';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-shoppimg',
  templateUrl: './shoppimg.component.html',
  styleUrls: ['./shoppimg.component.css']
})
export class ShoppimgComponent implements OnInit {
  formValue !: FormGroup;
  itemsData !: any;
  products: Product[]=[];
 

  constructor(private formbuilder: FormBuilder,private api : MyserviceService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
   
    this.formValue=this.formbuilder.group({
      id:[''],
      title:[''],
      price:[''],
      description:[''],
      category:[''],
      image:[''],
      rating:[''],
      rate:[''],
      count:['']
    })
    this.getAllItems();
   
  }

  

  getAllItems(){
    this.api.getItems().subscribe(res=>{
      this.itemsData =res;
    })
  }
    getAllratings(){
      this.api.getItems().subscribe(res=>{
        this.itemsData =res.rating;
      })
}
}
