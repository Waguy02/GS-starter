import { Routes } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

export const GROUP_ROUTES: Routes = [
  {
    path: 'groups',
    component: GroupListComponent
  },
  {
    path: 'groups/:id',
    component: GroupEditComponent
  }
];
