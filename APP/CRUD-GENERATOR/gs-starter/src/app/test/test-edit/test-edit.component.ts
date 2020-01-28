import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html'
})
export class TestEditComponent implements OnInit {

  id: string;
  test: Test;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testService: TestService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Test()); }
          return this.testService.findById(id);
        })
      )
      .subscribe(test => {
          this.test = test;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );
  }

  save() {
    this.testService.save(this.test).subscribe(
      test => {
        this.test = test;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/tests']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }

  cancel() {
    this.router.navigate(['/tests']);
  }
}
