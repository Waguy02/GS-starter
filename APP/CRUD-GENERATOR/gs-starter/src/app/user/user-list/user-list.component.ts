import {Component, OnInit, ViewChild} from '@angular/core';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-user',
  styleUrls: ['./user-list.scss'],
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {


@ViewChild(MatPaginator,null) paginator: MatPaginator;
  @ViewChild(MatSort,null) sort: MatSort;
  filter = new UserFilter();
  selectedUser: User;
  feedback: any = {};
  dataSource: MatTableDataSource<User>;
  private displayedColumns: string[] = ['id', 'name', 'adresse', 'sexe', 'actions'];

  get userList(): User[] {
    return this.userService.userList;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {

    this.userService.load(this.filter);
    //this.dataSource=new MatTableDataSource<User>(this.userService.userList);

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
