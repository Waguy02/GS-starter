import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserService } from './user.service';
import { USER_ROUTES } from './user.routes';
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
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [
    UserListComponent,
    UserEditComponent
  ],
  providers: [UserService],
  exports: []
})
export class UserModule { }
