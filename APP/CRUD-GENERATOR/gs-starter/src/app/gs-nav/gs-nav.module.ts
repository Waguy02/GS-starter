import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatExpansionModule } from '@angular/material';

import { GsNavRoutingModule } from './gs-nav.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavItemComponent } from './nav-item/nav-item.component';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BaseComponent, NavItemComponent],
  imports: [
    CommonModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    GsNavRoutingModule,
    
    MatExpansionModule,
    
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
  ],
  exports: [
    BaseComponent,NavItemComponent,
  ]
})
export class GsNavModule { }
