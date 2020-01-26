
import { GsNavRoutingModule } from './gs-nav.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavItemComponent } from './nav-item/nav-item.component';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BaseComponent, NavItemComponent],
  imports: [
    CommonModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    GsNavRoutingModule,
    
  ],
  exports: [
    BaseComponent,NavItemComponent,
  ]
})
export class GsNavModule { }
