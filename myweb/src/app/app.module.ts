import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TabMenuModule} from 'primeng/tabmenu';
import { LoginComponent } from './login/login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {SlideMenuModule} from 'primeng/slidemenu';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { NewsComponent } from './news/news.component';
import {DataViewModule} from 'primeng/dataview';
import {GMapModule} from 'primeng/gmap';
import { GalleryComponent } from './gallery/gallery.component';
import { ShoppimgComponent } from './shoppimg/shoppimg.component';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {ProgressBarModule} from 'primeng/progressbar';
import { BadgeModule } from "primeng/badge";
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewsComponent,
    GalleryComponent,
    ShoppimgComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabViewModule,
    StyleClassModule,
    RippleModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    CheckboxModule,
    SidebarModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    TableModule,
    ConfirmDialogModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    CommonModule,
    GMapModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    RatingModule,
    ProgressBarModule,
    BadgeModule,
    GalleriaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
