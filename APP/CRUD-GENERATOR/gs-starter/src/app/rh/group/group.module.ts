import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupService } from './group.service';
import { GROUP_ROUTES } from './group.routes';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatSortModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import Module = WebAssembly.Module;

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forChild(GROUP_ROUTES)
  ],
  declarations: [
    GroupListComponent,
    GroupEditComponent
  ],
  providers: [GroupService],
  exports: []
})
export class GroupModule { }
