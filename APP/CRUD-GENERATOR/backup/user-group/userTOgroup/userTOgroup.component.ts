import { GroupService } from './../../group/group.service';
import { Group } from 'src/app/group/group';
import { UserGroupService } from './../user-group.service';


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/user/user';
const caster=require('gs-cast');

  
  
  
  
  
  



@Component({
  selector: 'user-TO-group',
  templateUrl: './userTOgroup.component.html',
  providers:[ 
    
    
    GroupService
    
    
    
  ]
})
export class UserToGroupComponent implements OnInit {

  id: string;
  @Input()
  user: User
    groupList:Group[];
  

  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user_group_service:UserGroupService,
    private groupService:GroupService
                      
    
    
    ) 
    {
  }





  ngOnInit() {

    this.groupList=new Array<Group>();
        this.user_group_service.findGroupByUser(this.user).subscribe(
        data=>{
          
          for(var result of data){
            this.groupService.findById(result.group).subscribe(group=>this.groupList.push(group));
          }
        
        }
        )
      
      
      
      
      
      
    
  }

actionQuit(group){

    this.user_group_service.separate(this.user,group);
}






  
    
    
    
    
    
    
  











  
}
