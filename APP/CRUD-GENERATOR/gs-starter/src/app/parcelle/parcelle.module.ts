import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ParcelleListComponent } from './parcelle-list/parcelle-list.component';
import { ParcelleEditComponent } from './parcelle-edit/parcelle-edit.component';
import { ParcelleService } from './parcelle.service';
import { PARCELLE_ROUTES } from './parcelle.routes';
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
    RouterModule.forChild(PARCELLE_ROUTES)
  ],
  declarations: [
    ParcelleListComponent,
    ParcelleEditComponent
  ],
  providers: [ParcelleService],
  exports: []
})
export class ParcelleModule { }
