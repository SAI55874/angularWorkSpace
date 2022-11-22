import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-bsincharge',
  templateUrl: './bsincharge.component.html',
  styleUrls: ['./bsincharge.component.css']
})
export class BsinchargeComponent implements OnInit {

  items: MenuItem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Employee Details',
          icon: 'pi pi-pw pi-id-card',
         routerLink: ["../bsdetails"]
       
      },
      {
          label: 'Planning and Welfare',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Business Card', icon: 'pi pi-fw pi-wallet'},
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

