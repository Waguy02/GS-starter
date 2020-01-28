import { UserGroupModule } from './../user-group/user-group.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserService } from './user.service';
import { USER_ROUTES } from './user.routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    UserGroupModule,
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
