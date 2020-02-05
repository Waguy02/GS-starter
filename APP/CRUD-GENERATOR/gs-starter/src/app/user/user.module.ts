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
  MatCardModule,MatFormFieldModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule} from '@angular/material';

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
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
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