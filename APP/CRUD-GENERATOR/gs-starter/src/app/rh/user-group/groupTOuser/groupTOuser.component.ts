

import { UserService } from "src/app/rh/user/user.service"
import { User} from "src/app/rh/user/user"
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import {UserFilter} from "src/app/rh/user/user-filter"


  import { GroupService } from  "src/app/rh/group/group.service";
  import { Group} from  "src/app/rh/group/group";
  import {GroupFilter} from "src/app/rh/group/group-filter"

import { UserGroupService } from './../user-group.service';


import { UserGroup } from '../user-group';

const caster=require('angular-crud/gs-cast');
@Component({
  selector: 'group-TO-user',
  templateUrl: './groupTOuser.component.html',
  styleUrls:['./groupTOuser.scss'],
  providers:[
    GroupService

  ]
})
export class GroupToUserComponent implements OnInit {
  id: string;
@Input()
  group: Group
  user_groupList:Map<string,UserGroup>=new Map();

  userSearch: FormControl=new FormControl();
  foundUsers:User[];
  isSearching:boolean;

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


    this.load();
    this.enableSearch();
  }


  load(){
    var currentGroup=this.group;
    this.user_group_service.findByGroup(this.group).subscribe(
      data=>{
        for(var result of data){
          this.userService.findById(result.user).subscribe(user=>
          {
            var temp=new UserGroup();
            Object.assign(temp,result);
            temp.group=currentGroup;
            temp.user=user;
            this.user_groupList.set(user._id,temp);
          })
        }
      }
    )
  }

  enableSearch(){
    this.userSearch.valueChanges.pipe(
      debounceTime(500),
      tap(() => {this.isSearching=true;}),
      switchMap(value => this.userService.find(new UserFilter())
        .pipe(
          finalize(() => this.isSearching=false),
        )
      )
    ).subscribe((resultList =>{
      caster.arrayCast(resultList,User);
      this.foundUsers=resultList;
      console.log(this.foundUsers);
    }))

  }


  actionJoin(user){
    var user_group=new UserGroup();
    user_group.group=this.group;
    user_group.user=user;
    this.user_group_service.link(user_group).subscribe(data=>{
        this.user_groupList.set(user._id,data)
        console.log("Jointure effectuée avec succès")},
      err=>{"Erreur survenue lors de la jointure"})
  }


  actionQuit(user_group){
    this.user_group_service.separate(user_group).subscribe(data=>{
        this.user_groupList.delete(user_group.user._id)
        console.log("Separation effectuée avec succès")},
      err=>{"Erreur survenue lors de la séparation"})
  }
}
