import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductformComponent } from './ProductScreen/productform/productform.component';
import { SidenavComponent } from './ProductScreen/sidenav/sidenav.component';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
//import{TreeSelectModule} from 'primeng/treeselect';

// import {TieredMenuModule} from 'primeng/tieredmenu';
// import {MenuItem} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
//import {ToggleButtonModule} from 'primeng/togglebutton';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule}from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './ProductScreen/header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProductTableComponent } from './ProductScreen/product-table/product-table.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialManagementComponent } from './ProductScreen/material-management/material-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableInfoComponent } from './ProductScreen/product-table-info/product-table-info.component';
// import {FileUpload, FileUploadModule} from 'primeng/primeng';


const navigationpath : Routes=[
  {path : 'materialmanagment' , component : MaterialManagementComponent},
  {path:'productform',component:ProductformComponent},
  {path: 'productlist',component:ProductTableComponent},
  {path: 'productinfo/:productId',component:ProductTableInfoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductformComponent,
    SidenavComponent,
    HeaderComponent,
    ProductTableComponent,
    MaterialManagementComponent,
    ProductTableInfoComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    ButtonModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    InputTextareaModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot(navigationpath)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
