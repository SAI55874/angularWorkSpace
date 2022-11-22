import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { MyserviceService } from '../shared/myservice.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  formValue !: FormGroup;
  newsData !: any;
  images: any[]=[];
  valueChange:any;
  constructor(private formbuilder: FormBuilder,private api : MyserviceService) { }
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      id:[''],
      author:[''],
      url:[''],
      width:[''],
      height:[''],
      download_url:['']
    })
    this.getAllimages();
    this.api.getImagess().then(images => this.images = images);
  }
  getAllimages(){
    this.api.getImages().subscribe(res=>{
      this.newsData =res;
    })
}}
