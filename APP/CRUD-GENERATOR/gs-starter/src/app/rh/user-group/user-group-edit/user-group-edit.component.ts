import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { UserGroupService } from '../user-group.service';
import { UserGroup  } from '../user-group';

@Component({
  selector: 'user-group-edit',
  styleUrls:['./user-group-edit.scss'],
  templateUrl: './user-group-edit.component.html'
})
export class UserGroupEditComponent implements OnInit {

  id: string;
  @Input()
  user_group: UserGroup;
  feedback: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user_groupService: UserGroupService,
  
)
  {
  }
  ngOnInit() {

    
  }
  actionUpdate() {
    this.user_groupService.update(this.user_group).subscribe(
      data => {
      this.user_group = data;
      this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
      setTimeout(() => {
        this.feedback=undefined;
      }, 1000);
    },
    err => {
      this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
    }
  );
  }
  cancel() {
    this.router.navigate(['/rh/userGroups']);
  }
  
}
