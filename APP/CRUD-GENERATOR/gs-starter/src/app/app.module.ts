import { UserGroupModule } from './user-group/user-group.module';

import { ParcelletestModule } from './parcelletest/parcelletest.module';

import { GroupModule } from './group/group.module';

import { TestModule } from './test/test.module';
import { GsNavModule } from './gs-nav/gs-nav.module';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatSelectModule, MatCardModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { EspeceModule } from './espece/espece.module';
import { ParcelleModule } from './parcelle/parcelle.module';
import { UserModule } from './user/user.module';


@NgModule({

  declarations: [
    AppComponent, NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserGroupModule,
    GsNavModule,
    TestModule,
    UserModule,
    GroupModule,
    
    EspeceModule,
   
    ParcelleModule,
    ParcelletestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
