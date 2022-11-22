import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { NasaService } from '../shared/nasa.service';
import {freeapis}from '../freeapis/freeapis.model';

@Component({
  selector: 'app-freeapis',
  templateUrl: './freeapis.component.html',
  styleUrls: ['./freeapis.component.css']
})
export class FreeapisComponent implements OnInit {
  formValue !: FormGroup;
  apisData !: any;
  objData:freeapis=new freeapis();
  constructor(private formbuilder: FormBuilder,private api : NasaService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
    Api:[''],
    Description:[''],
    Auth:[''],
    Https:[''],
    Cors:[''],
    Link:[''],
    category:[''],
      
    })
    this.getAllfreeApis();
  }

  getAllfreeApis(){
    this.api.getAllApis().subscribe(data => { this.apisData = data.entries;
      // this.apisData = Array.of(this.apisData); 
            }
    )}
}
