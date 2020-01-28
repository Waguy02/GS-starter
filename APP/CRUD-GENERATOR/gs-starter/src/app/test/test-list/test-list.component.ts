import { Component, OnInit } from '@angular/core';
import { TestFilter } from '../test-filter';
import { TestService } from '../test.service';
import { Test } from '../test';

@Component({
  selector: 'app-test',
  templateUrl: 'test-list.component.html'
})
export class TestListComponent implements OnInit {

  filter = new TestFilter();
  selectedTest: Test;
  feedback: any = {};

  get testList(): Test[] {
    return this.testService.testList;
  }

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.testService.load(this.filter);
  }

  select(selected: Test): void {
    this.selectedTest = selected;
  }

  delete(test: Test): void {
    if (confirm('Etes-vous sûr?')) {
      this.testService.delete(test).subscribe(() => {
          this.feedback = {type: 'success', message: 'Suppression effectuée avec succès!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors de la suppression.'};
        }
      );
    }
  }
}
