import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('gs-cast');
import { UserService } from '../user.service';
import { User } from '../user';
 import { GroupService } from '../../group/group.service';
import { Group} from '../../group/group';
import { GroupFilter} from '../../group/group-filter';



@Component({
  selector: 'app-user-edit',
  styleUrls:['./user-edit.scss'],
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
     private groupService: GroupService, 
    )
    {
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
      .subscribe(user => {
          this.user = user;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

       
        this.configureGroupInput()
        
        
  }

  save() {
    this.userService.save(this.user).subscribe(
      user => {
        this.user = user;
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







   
    

  filteredGroupList:Group[]=new Array<Group>();
  groupInput:FormControl;
  selectedGroup:Group;
  isLoadingGroup=false;

  groupClick(event: any) {
    this.selectedGroup= event.option.value;
  }
  
  checkGroup() {
    if (!this.selectedGroup|| this.selectedGroup!== this.groupInput.value) {
      this.groupInput.setValue(null);
      this.selectedGroup= null;
      return; 
    }
    this.user.group=this.selectedGroup;
  }
  
  displayGroup(group:Group) {
    
    if (group) return group.display;
    
  }
  configureGroupInput(){
    this.groupInput=new FormControl();
  
    this.groupInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingGroup= true;}),
      switchMap(value => this.groupService.find(new GroupFilter())
      .pipe(
        finalize(() => this.isLoadingGroup= false),
        ) 
        ) 
      )
    .subscribe((resultList =>{
      caster.arrayCast(resultList,Group);
      this.filteredGroupList=resultList;}))
    
  }
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    










}


