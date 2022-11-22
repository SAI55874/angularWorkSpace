import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  items: MenuItem[]=[];

  scrollableItems: MenuItem[]=[];
  itemcontent:any[]=[];
  activeItem: any;

  // activeItem2: MenuItem;
  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:["nav"]},
      {label: 'About Us', icon: 'pi pi-fw pi-calendar'},
      {label: 'Contact Us', icon: 'pi pi-fw pi-pencil'},
     
  ];
  this.itemcontent=["home","Aboutus","Contactus"]

  this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));

  // this.activeItem = this.items[0];

  // this.activeItem2 = this.scrollableItems[0];


  }

}
