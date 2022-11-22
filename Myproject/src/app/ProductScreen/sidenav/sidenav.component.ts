import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  display: boolean= false;
  checked : boolean=false;
  visible : boolean =true;
  MMoption : String[];
 

  constructor() {
    this.MMoption=["Place Order" ,"My Order","Forecast","New Product Request"]
   }
 

  ngOnInit(): void {
  }

}
