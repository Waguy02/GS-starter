






import { UserService } from "src/app/rh/user/user.service"
import { User} from "src/app/rh/user/user"


  import { GroupService } from  "src/app/rh/group/group.service";
  import { Group} from  "src/app/rh/group/group";
  

import { UserGroupService } from './../user-group.service';
import { UserGroup } from '../user-group';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



const caster=require('angular-crud/gs-cast');










@Component({
  selector: 'group-TO-user',
  templateUrl: './groupTOuser.component.html',
  styleUrls:['./groupTOuser.scss'],
  providers:[
    UserService





  ]
})export class GroupToUserComponent implements OnInit {

  id: string;
  @Input()
  group: Group
    user_groupList:UserGroup[];


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
    this.user_groupList=new Array<UserGroup>();

    var currentGroup=this.group;
        this.user_group_service.findByGroup(this.group).subscribe(


            data=>{
              console.log("DATAS");
              console.log(data);

              for(var result of data){


                this.userService.findById(result.user).subscribe(user=>{


                  var temp=new UserGroup();
                  Object.assign(temp,result);
                  temp.user=user;
                  temp.group=currentGroup;
                  this.user_groupList.push(temp);




                })
              }




            }
        )







  }



  actionQuit(user_group){

    this.user_group_service.separate(user_group).subscribe(data=>{console.log("Separation effectuée avec succès")},err=>{"Erreur survenue lors de la séparation"})

}






























}