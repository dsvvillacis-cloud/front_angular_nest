import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    InicioComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
