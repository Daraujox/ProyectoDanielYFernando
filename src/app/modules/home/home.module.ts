import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InformacionhomeComponent } from './informacionhome/informacionhome.component';
import { PlatoshomeComponent } from './platoshome/platoshome.component';
import { ArticuloshomeComponent } from './articuloshome/articuloshome.component';
 

@NgModule({
  declarations: [
    HomeComponent,
    InformacionhomeComponent,
    PlatoshomeComponent,
    ArticuloshomeComponent,
 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
