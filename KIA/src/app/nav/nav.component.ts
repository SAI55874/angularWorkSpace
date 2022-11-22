import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[]=[];
  
  constructor() { }

  ngOnInit(): void {
   
      // this.items = [
      //     {label: 'Home', icon: 'pi pi-fw pi-home'},
      //     {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      //     {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      //     {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      //     {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      // ];
  }

}
