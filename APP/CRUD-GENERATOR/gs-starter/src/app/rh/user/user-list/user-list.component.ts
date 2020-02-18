import { ViewChild, Component, OnInit } from '@angular/core';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user',
  styleUrls: ['./user-list.scss'],
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
filter = new UserFilter();
selectedUser: User;
@ViewChild(MatPaginator, null) paginator: MatPaginator;
@ViewChild(MatSort, null) sort: MatSort;
dataSource: MatTableDataSource<User>;
 feedback: any = {};
 displayedColumns: string[] = ['_id', 'name', 'group', 'sexe', 'date_naissance', 'niveau', 'actions'];
 server_processing = false;

      nameFilter: GsFilter;

      sexeFilter: GsFilter;

      date_naissanceFilter: GsFilter;

  filteredValues: any;
initFilters() {

        this.nameFilter = new GsFilter();

        this.nameFilter.controls.val = new FormControl();


        this.sexeFilter = new GsFilter();

        this.sexeFilter.controls.val = new FormControl();


        this.date_naissanceFilter = new GsFilter();

        this.date_naissanceFilter.controls.min = new FormControl();
        this.date_naissanceFilter.controls.max = new FormControl();
        this.date_naissanceFilter.controls.val = new FormControl();


        this.filteredValues = {  name: this.nameFilter.values,      sexe: this.sexeFilter.values,      date_naissance: this.date_naissanceFilter.values,      };
  }
public applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value; this.applyFilter(); });




        this.sexeFilter.controls.val.valueChanges.subscribe((value) => {this.sexeFilter.values.val = value; this.applyFilter(); });




        this.date_naissanceFilter.controls.val.valueChanges.subscribe((value) => {this.date_naissanceFilter.values.val = value; this.applyFilter(); });
        this.date_naissanceFilter.controls.min.valueChanges.subscribe((value) => {this.date_naissanceFilter.values.min = value; this.applyFilter(); });
        this.date_naissanceFilter.controls.max.valueChanges.subscribe((value) => {this.date_naissanceFilter.values.max = value; this.applyFilter(); });


        this.dataSource.filterPredicate =
      (user: User, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck = true;

        let sexeCheck = true;

        let date_naissanceCheck = true;






        if (parsedFilters.name.val) {
                nameCheck = !user.name ? false : user.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }




        if (parsedFilters.sexe.val) {
                sexeCheck = !user.sexe ? false : user.sexe == parsedFilters.sexe.val;
              }


        if (parsedFilters.date_naissance.val) {
            date_naissanceCheck = user.date_naissance ? false : user.date_naissance.equals(parsedFilters.date_naissance.val);
          } else {
            if (parsedFilters.date_naissance.min) {
              date_naissanceCheck = date_naissanceCheck && (parsedFilters.date_naissance.min <= user.date_naissance);
            }
            if (parsedFilters.date_naissance.max) {
              date_naissanceCheck = date_naissanceCheck && (parsedFilters.date_naissance.max >= user.date_naissance);
            }
          }

        return   nameCheck && sexeCheck && date_naissanceCheck && true;
    };
}


  get userList(): User[] {
    return this.userService.userList;
  }
constructor(private userService: UserService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.userService.load(this.filter).then((data) => {
setTimeout( () => {
          this.dataSource = new MatTableDataSource<User>(this.userService.userList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200);
});
}
select(selected: User): void {
    this.selectedUser = selected;
  }
delete(user: User): void {
    if (confirm('Etes-vous sûr?')) {
      this.userService.delete(user).subscribe(() => {
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
export class GsFilter {
values: {
    min: any;
    max: any;
    val: any;
  } = {
  min: undefined,
  max: undefined,
  val: undefined,
};
controls: {
    min: FormControl;
    max: FormControl;
    val: FormControl;
  } = {
    min: null,
    max: null,
    val: null,
};

reset() {
  if (this.controls.min) {this.controls.min.setValue(undefined); }
  if (this.controls.max) {this.controls.max.setValue(undefined); }
  if (this.controls.val) {this.controls.val.setValue(undefined); }
}


}
