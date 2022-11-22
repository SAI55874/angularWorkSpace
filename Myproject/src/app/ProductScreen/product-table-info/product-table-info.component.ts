import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Model } from '../model';

@Component({
  selector: 'app-product-table-info',
  templateUrl: './product-table-info.component.html',
  styleUrls: ['./product-table-info.component.css']
})
export class ProductTableInfoComponent {

  product : any = new Model();
  
  constructor(private api : ApiServiceService,private activeRoute:ActivatedRoute,private router:Router){
    // this.product=new Model();
  }
  
  ngOnInit():void{
    let productName:any;
    this.activeRoute.paramMap.subscribe((params)=>{productName=params.get("productId")}); 
    console.log(productName);

  this.product = this.api.getProductById(productName);
  console.log(this.product);

}

  goBack():void{
    this.router.navigate(['productlist'])
  }

}
