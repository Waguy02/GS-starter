import { Group } from 'src/app/group/group';
import { User} from './../user/user';
import { camelize } from '@angular-devkit/core/src/utils/strings';
import { UserGroup} from './user1-group1';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const caster = require('gs-cast');
const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
    providedIn: 'root',
  })
export class UserGroupService {


    
    api = 'http://localhost:5500/rh/user_group';


    constructor(private http: HttpClient) {
    }


    public findByUser(user:User):Observable<any>{


        const url = this.api+'/'+'user'+'/'+user._id;
        const params = {
        
        };
        
        return this.http.get(url,{params,headers});

    }


    public findByGroup(group:Group):Observable<any>{


        const url = this.api+'/'+'group'+'/'+group._id;
        const params = {
            
            };
            
            return this.http.get(url,{params,headers});
    


    }





    public link(userGroup:UserGroup){

        const params ={

        }
            return this.http.post<UserGroup>(this.api,userGroup,
                {headers,params})

    }




      




        public separate(user_group:UserGroup){

            const url = this.api+"/"+user_group._id;
            const params ={
            }
                return this.http.delete<UserGroup>(this.api,
                    {headers,params})
        
        {


        }
    }




}

