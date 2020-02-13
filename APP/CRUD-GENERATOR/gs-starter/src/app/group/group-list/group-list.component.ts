import { Component, OnInit } from '@angular/core';
import { GroupFilter } from '../group-filter';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'app-group',
  styleUrls:['./group-list.scss'],
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {

  filter = new GroupFilter();
  selectedGroup: Group;
  feedback: any = {};

  get groupList(): Group[] {
    return this.groupService.groupList;
  }

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.groupService.load(this.filter);
  }

  select(selected: Group): void {
    this.selectedGroup = selected;
  }

  delete(group: Group): void {
    if (confirm('Etes-vous sûr?')) {
      this.groupService.delete(group).subscribe(() => {
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
