
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './../user/user.service'


import { UserGroupService } from './user1-group1.service';

import { GroupService } from './../group/group.service'


import { GroupToUserComponent } from './group1TOuser1/group1TOuser1.component';
import { UserToGroupComponent } from './user1TOgroup1/user1TOgroup1.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule,MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatButton, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule 
    
  ],
  declarations: [
   
    UserToGroupComponent,
    GroupToUserComponent,
  ],
  providers: [UserGroupService,GroupService,UserService],
  exports: [
    
   UserToGroupComponent,
   GroupToUserComponent,
  ]
})
export class UserGroupModule { }
