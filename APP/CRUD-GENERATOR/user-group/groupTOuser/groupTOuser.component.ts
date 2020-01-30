import { UserService } from './../../user/user.service';
import { User } from 'src/app/user/user';
import { UserGroupService } from './../user-group.service';


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { Group } from 'src/app/group/group';
const caster=require('gs-cast');

  
  
  
  
  
  



@Component({
  selector: 'group-TO-user',
  templateUrl: './groupTOuser.component.html',
  providers:[ 
    UserService 
    
    
    
    
    
  ]
})
export class GroupToUserComponent implements OnInit {

  id: string;
  @Input()
  group: Group
    userList:User[];
  

  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user_group_service:UserGroupService,
    private userService:UserService
                        
    
    
    ) 
    {
  }





  ngOnInit() {
    this.userList=new Array<User>();
        this.user_group_service.findUserByGroup(this.group).subscribe(
          

            data=>{
              console.log("DATAS");
              console.log(data);
              
              for(var result of data){
                this.userService.findById(result.user).subscribe(user=>this.userList.push(user))
              }

              
              
            
            }
        )
      
      
      
      
      
      
    
  }


  
actionQuit(user){

    this.user_group_service.separate(user,this.group);
}











  
    
    
    
    
    
    
  











  
}
