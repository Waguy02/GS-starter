

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
import { UserGroup } from '../user-group'
const caster=require('angular-crud/gs-cast');
@Component({
  selector: 'user-TO-group',
  templateUrl: './userTOgroup.component.html',
  styleUrls:['./userTOgroup.scss'],
  providers:[
    GroupService

  ]
})
export class UserToGroupComponent implements OnInit {
  id: string;
  @Input()
  user: User
  user_groupList:Map<string,UserGroup>=new Map();

  groupSearch: FormControl=new FormControl();
  foundGroups:Group[];
  isSearching:boolean;

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


    this.load();
    this.enableSearch();
  }


  load(){
    var currentUser=this.user;
    this.user_group_service.findByUser(this.user).subscribe(
      data=>{
        for(var result of data){
          this.groupService.findById(result.group).subscribe(group=>
          {
            var temp=new UserGroup();
            Object.assign(temp,result);
            temp.user=currentUser;
            temp.group=group;
            this.user_groupList.set(group._id,temp);
          })
        }
      }
    )
  }

  enableSearch(){
    this.groupSearch.valueChanges.pipe(
      debounceTime(500),
      tap(() => {this.isSearching=true;}),
      switchMap(value => this.groupService.find(new GroupFilter())
        .pipe(
          finalize(() => this.isSearching=false),
        )
      )
    ).subscribe((resultList =>{
      caster.arrayCast(resultList,Group);
      this.foundGroups=resultList;
      console.log(this.foundGroups);
    }))

  }


  actionJoin(group){
    var user_group=new UserGroup();
    user_group.user=this.user;
    user_group.group=group;
    this.user_group_service.link(user_group).subscribe(data=>{
        this.user_groupList.set(group._id,data)
      console.log("Jointure effectuée avec succès")},
      err=>{"Erreur survenue lors de la jointure"})
  }


  actionQuit(user_group){
    this.user_group_service.separate(user_group).subscribe(data=>{
      this.user_groupList.delete(user_group.group._id)
        console.log("Separation effectuée avec succès")},
      err=>{"Erreur survenue lors de la séparation"})
  }
}
