import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { TestService } from './test.service';
import { TEST_ROUTES } from './test.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TEST_ROUTES)
  ],
  declarations: [
    TestListComponent,
    TestEditComponent
  ],
  providers: [TestService],
  exports: []
})
export class TestModule { }
