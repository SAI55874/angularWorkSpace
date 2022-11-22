import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: MenuItem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Employee Details',
          icon: 'pi pi-pw pi-id-card',
         routerLink: ["../adetails"]
       
      },
      {
          label: 'Planning and Welfare',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Business Card', icon: 'pi pi-fw pi-wallet', routerLink: ["../asidebar"]},
              {label: 'Courier', icon: 'pi pi-fw pi-inbox'},
              {label: 'Uniform',icon: 'pi pi-fw pi-users'}

          ]
      },
      {
          label: 'Protocol & Transportation',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Business Travel',
                  icon: 'pi pi-pi pi-briefcase'
              },
              {
                  label: 'Car Service', 
                  icon: 'pi pi-pi pi-search', 
                  },
            {
                 label: 'Security', 
              icon: 'pi pi-pi pi-search', 
          }

          ]
      },
      {
          label: 'Aprovers Login',
          icon: 'pi pi-fw pi-cog',
           }
  ];
  }

}
