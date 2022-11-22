import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { NasaService } from '../shared/nasa.service';
import {mydataModel}from '../mydata/mydata.model';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
  formValue !: FormGroup;
  employeeData !: any;
  dataObj:mydataModel=new mydataModel();
  constructor(private formbuilder: FormBuilder,private api : NasaService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      alpha_two_code : [''],
      domains :[''],
      country:[''],
      state_province:[''],
      web_pages:['']
      
    })
    this.getAllDetails();
  }
  getAllDetails(){
    this.api.getDetails().subscribe(res=>{
      this.employeeData =res;
    })
}
}
