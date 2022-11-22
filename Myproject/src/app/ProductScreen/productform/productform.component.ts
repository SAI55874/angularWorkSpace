import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Model } from '../model';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent  {


  productModelObj : Model = new Model();
  category : String[] ;
  type :String[];
  producttable: String[];
  formValue !: FormGroup;


  constructor(private api : ApiServiceService , private formbuilder :FormBuilder) {
    this.category=["Tool","lights","glass & mirror"];
    this.type=["Tools","Kits"];
    this.producttable=[""];
   }
 

   ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      // productId : [''],
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
    // this.getAllProject();
 }

   
   PostProduct()
   {
    this.productModelObj.productId=this.formValue.value.productId++;
     this.productModelObj.productName=this.formValue.value.productName;
     this.productModelObj.productCategory=this.formValue.value.productCategory;
     this.productModelObj.productType=this.formValue.value.productType;
     this.productModelObj.productLength=this.formValue.value.productLength;
     this.productModelObj.productDia=this.formValue.value.productDia;
     this.productModelObj.productDrive=this.formValue.value.productDrive;
     this.productModelObj.productQuantity=this.formValue.value.productQuantity;
     this.productModelObj.productVolume=this.formValue.value.productVolume;
     this.productModelObj.productFile=this.formValue.value.productFile;
     this.productModelObj.productDesc=this.formValue.value.productDesc;
     this.productModelObj.productImage=this.formValue.value.productImage;
      console.log(this.productModelObj)

     this.api.addProduct(this.productModelObj)
     .subscribe(res=>{
       console.log(res);
       let ref=document.getElementById("cancel")
       ref?.click();
       this.formValue.reset(); 
       
     })
     alert("Product addded successfully");
    //  window.location.reload();
 
   }
    
  
  }
