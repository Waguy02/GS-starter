import { ViewChild,Component, OnInit } from '@angular/core';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-user',
  styleUrls:['./user-list.scss'],
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

  filter = new UserFilter();
  selectedUser: User;


@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;

  dataSource: MatTableDataSource<User>;


  feedback: any = {};
  displayedColumns: string[] = ['_id','name','group','sexe','date_naissance','niveau','actions'];


  get userList(): User[] {
    return this.userService.userList;
  }

  constructor(private userService: UserService) {

  }

  ngOnInit() {



  }

  ngAfterViewInit() {
    this.search();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }







  search(): void {
    this.userService.load(this.filter).then((data)=>{


      setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<User>(this.userService.userList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

        },
        200)

    })

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
