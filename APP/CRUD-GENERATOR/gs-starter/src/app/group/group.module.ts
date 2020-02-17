
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
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import {UserGroupModule} from '../rh/user-group/user-group.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    UserGroupModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatExpansionModule,
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
