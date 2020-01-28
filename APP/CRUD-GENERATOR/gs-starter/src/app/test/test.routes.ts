import { Routes } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { TestEditComponent } from './test-edit/test-edit.component';

export const TEST_ROUTES: Routes = [
  {
    path: 'tests',
    component: TestListComponent
  },
  {
    path: 'tests/:id',
    component: TestEditComponent
  }
];
