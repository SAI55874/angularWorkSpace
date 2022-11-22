import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TabMenuModule} from 'primeng/tabmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {SlideMenuModule} from 'primeng/slidemenu';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import {TableModule} from 'primeng/table';
import { BsinchargeComponent } from './bsincharge/bsincharge.component';
import { BsdetailsComponent } from './bsdetails/bsdetails.component';
import { NewrequestComponent } from './newrequest/newrequest.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MydataComponent } from './mydata/mydata.component';
import { NasaService } from './shared/nasa.service';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FreeapisComponent } from './freeapis/freeapis.component';
import { NewsComponent } from './news/news.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    AdminDetailsComponent,
    BsinchargeComponent,
    BsdetailsComponent,
    NewrequestComponent,
    AsidebarComponent,
    MydataComponent,
    FreeapisComponent,
    NewsComponent,
   
    
    
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
    ScrollingModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VirtualScrollerModule
    
  ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}