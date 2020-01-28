
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './../user/user.service'
import { USER_ROUTES } from './../user/user.routes';

import { UserGroupService } from './user-group.service';

import { GroupService } from './../group/group.service'
import { GROUP_ROUTES } from './../group/group.routes';

import { GroupToUserComponent } from './groupTOuser/groupTOuser.component';
import { UserToGroupComponent } from './userTOgroup/userTOgroup.component';
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
