import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from '@angular/forms';
import { EmployeeModel } from './employee';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj :EmployeeModel=new EmployeeModel();
  employeeData!:any[];
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilder: FormBuilder,private api : SharedService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      emailId:[''],
      firstName : [''],
      lastName :['']

    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails(){
    this.employeeModelObj.emailId=this.formValue.value.emailId;
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
  
  
    

    this.api.postEmploye(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee details added sucessfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something went wrong");
    }
    )

  }
  getAllEmployee(){
    this.api.getEmploye().subscribe(res=>{
      this.employeeData =res;
    })
  }
deleteEmployee(row : any){
  this.api.deleteEmployee(row.id).subscribe(res=>{
    alert("Emlployee details deleted")
    this.getAllEmployee();
  })
}



onEdit(row:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.employeeModelObj.id = row.id;
  this.formValue.controls['emailId'].setValue(row.emailId);
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
 

}

updateEmployeeDetails(){
  this.employeeModelObj.emailId=this.formValue.value.emailId;
  this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
   
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    
    err=>{
      alert("Something went wrong");
    })
}


}
