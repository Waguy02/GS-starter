import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User} from '../user';

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('gs-cast');

  
  
  
  
  
  



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  providers:[ 
    
    
    
    
    
    
  ]
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
                      
    
    
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
          if (id === 'new') { return of(new User()); }
          return this.userService.findById(id);
        })
      )
      .subscribe(user=> {
          this.user= user;
          this.initRef();
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

      

    
      
      
      
      
      
      
    
  }

  save() {
    this.userService.save(this.user).subscribe(
      user=> {
        this.user= user;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );

  }

  cancel() {
    this.router.navigate(['/users']);
  }









  
    
    
    
    
    
    
  











  
}
