


import { UserService } from "src/app/rh/user/user.service"
import { User} from "src/app/rh/user/user"

import { GroupService } from  "src/app/rh/group/group.service";
  import { Group} from  "src/app/rh/group/group";
  
import { UserGroupService } from './user-group.service';
import { GroupToUserComponent } from './groupTOuser/groupTOuser.component';
import { UserToGroupComponent } from './userTOgroup/userTOgroup.component';
import { UserGroupEditComponent } from './user-group-edit/user-group-edit.component';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule,MatSelectModule, MatExpansionModule, MatButtonModule,MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatButton, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    CommonModule,
FormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,

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
      
    UserGroupEditComponent,
  ],
  providers: [UserGroupService,GroupService,UserService],
  exports: [
UserToGroupComponent,
   GroupToUserComponent,
  ]
})
export class UserGroupModule { }
