import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ParcelletestListComponent } from './parcelletest-list/parcelletest-list.component';
import { ParcelletestEditComponent } from './parcelletest-edit/parcelletest-edit.component';
import { ParcelletestService } from './parcelletest.service';
import { PARCELLETEST_ROUTES } from './parcelletest.routes';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule ,MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forChild(PARCELLETEST_ROUTES)
  ],
  declarations: [
    ParcelletestListComponent,
    ParcelletestEditComponent
  ],
  providers: [ParcelletestService],
  exports: []
})
export class ParcelletestModule { }
