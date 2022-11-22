import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  productsData : any;

 
  formValue !: FormGroup;


  constructor(private api : ApiServiceService , private formbuilder :FormBuilder){}
  
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      productId : [''],
      productName : [''],
      productCategory : [''],
      productType : [''],
      productLength :[],
      productDia : [],
      productDrive :[],
      productQuantity : [],
      productVolume : [],
      productFile : [''],
      productDesc :[''],
      productImage : ['']

    })
    this.getAllProduct();
 }


  
  getAllProduct()
  {
    this.api.getProduct()
    .subscribe((res)=>
      {
        this.productsData = res;  
      })
  }



}
