import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EspeceListComponent } from './espece-list/espece-list.component';
import { EspeceEditComponent } from './espece-edit/espece-edit.component';
import { EspeceService } from './espece.service';
import { ESPECE_ROUTES } from './espece.routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
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
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    RouterModule.forChild(ESPECE_ROUTES)
  ],
  declarations: [
    EspeceListComponent,
    EspeceEditComponent
  ],
  providers: [EspeceService],
  exports: []
})
export class EspeceModule { }
