import { Component, OnInit } from '@angular/core';
import { ParcelletestFilter } from '../parcelletest-filter';
import { ParcelletestService } from '../parcelletest.service';
import { Parcelletest } from '../parcelletest';

@Component({
  selector: 'app-parcelletest',
  templateUrl: 'parcelletest-list.component.html'
})
export class ParcelletestListComponent implements OnInit {

  filter = new ParcelletestFilter();
  selectedParcelletest: Parcelletest;
  feedback: any = {};

  get parcelletestList(): Parcelletest[] {
    return this.parcelletestService.parcelletestList;
  }

  constructor(private parcelletestService: ParcelletestService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.parcelletestService.load(this.filter);
  }

  select(selected: Parcelletest): void {
    this.selectedParcelletest = selected;
  }

  delete(parcelletest: Parcelletest): void {
    if (confirm('Etes-vous sûr?')) {
      this.parcelletestService.delete(parcelletest).subscribe(() => {
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
