import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[]=[];
  display: any="";

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:["login"]},
      {label: 'Shoping', icon: 'pi pi-fw pi-calendar',routerLink:["shopping"]},
      {label: 'News', icon: 'pi pi-fw pi-pencil',routerLink:["news"]},
      {label: 'Gallery', icon: 'pi pi-fw pi-camera',routerLink:["gallery"]},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];

  }

}
