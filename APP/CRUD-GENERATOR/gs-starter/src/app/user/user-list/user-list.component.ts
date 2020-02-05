import { Component, OnInit } from '@angular/core';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  styleUrls:['./user-list.scss'],
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

  filter = new UserFilter();
  selectedUser: User;
  feedback: any = {};

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