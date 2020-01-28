import { UserGroupModule } from './../user-group/user-group.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupService } from './group.service';
import { GROUP_ROUTES } from './group.routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatCardModule,MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    UserGroupModule,
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
