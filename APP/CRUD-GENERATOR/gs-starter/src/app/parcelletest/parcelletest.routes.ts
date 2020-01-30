import { Routes } from '@angular/router';
import { ParcelletestListComponent } from './parcelletest-list/parcelletest-list.component';
import { ParcelletestEditComponent } from './parcelletest-edit/parcelletest-edit.component';

export const PARCELLETEST_ROUTES: Routes = [
  {
    path: 'parcelletests',
    component: ParcelletestListComponent
  },
  {
    path: 'parcelletests/:id',
    component: ParcelletestEditComponent
  }
];
