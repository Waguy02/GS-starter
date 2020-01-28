import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GroupService } from '../group.service';
import { Group} from '../group';

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('gs-cast');

  
  
  
  



@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  providers:[ 
    
    
    
    
  ]
})
export class GroupEditComponent implements OnInit {

  id: string;
  group: Group;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
                
    
    
    ) 
    {
  }



  public  initRef(){

                


  }




  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Group()); }
          return this.groupService.findById(id);
        })
      )
      .subscribe(group=> {
          this.group= group;
          this.initRef();
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

      

    
      
      
      
      
    
  }

  save() {
    this.groupService.save(this.group).subscribe(
      group=> {
        this.group= group;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/groups']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );

  }

  cancel() {
    this.router.navigate(['/groups']);
  }









  
    
    
    
    
  











  
}
