import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { BsinchargeComponent } from './bsincharge/bsincharge.component';
import { BsdetailsComponent } from './bsdetails/bsdetails.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { NewrequestComponent } from './newrequest/newrequest.component';

const routes: Routes = [
  
  {path: 'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavComponent },
  {path:'adetails',component:AdminDetailsComponent},
  {path:'bsinch',component:BsinchargeComponent},
  {path:'bsdetails',component:BsdetailsComponent},
  {path:'asidebar',component:AsidebarComponent},
  {path:'newrequest',component:NewrequestComponent}

 
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
