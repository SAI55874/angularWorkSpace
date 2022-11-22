import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { NasaService } from '../shared/nasa.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  formValue !: FormGroup;
  newsData !: any;
  constructor(private formbuilder: FormBuilder,private api : NasaService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      source:[''],
      author : [''],
      title :[''],
      description:[''],
      url:[''],
      urlToImage:[''],
      publishedAt:[''],
      content:['']
      
    })
    this.getAllnews();
  }
  getAllnews(){
    this.api.getNews().subscribe(res=>{
      this.newsData =res.articles;
    })
}}
