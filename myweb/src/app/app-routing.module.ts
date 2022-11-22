import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';

import { NewsComponent } from './news/news.component';
import { ShoppimgComponent } from './shoppimg/shoppimg.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'news',component:NewsComponent},
 {path:'gallery',component:GalleryComponent},
 {path:'shopping',component:ShoppimgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
