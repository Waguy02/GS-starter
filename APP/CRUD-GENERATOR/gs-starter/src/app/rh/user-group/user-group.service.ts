


import { UserService } from "src/app/rh/user/user.service"
import { GroupService } from  "src/app/rh/group/group.service";
import { User} from "src/app/rh/user/user"

  import { Group} from  "src/app/rh/group/group";
    
import { camelize } from '@angular-devkit/core/src/utils/strings';
import { UserGroup} from './user-group';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const caster=require('angular-crud/gs-cast');
const headers = new HttpHeaders().set('Accept', 'application/json');
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
  })
export class UserGroupService {
api = environment.main_api+'/rh/user_group';
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
public link(user_group:UserGroup){
const params ={
}
            return this.http.post<UserGroup>(this.api,user_group,
                {headers,params})
}
public separate(user_group:UserGroup){
const url = this.api+"/"+user_group._id;
            const params ={
            }
                return this.http.delete<UserGroup>(url,
                    {headers,params})

    }

public update(user_group:UserGroup){
    const url = this.api+"/"+user_group._id;
    const params ={
    }
    return this.http.put<UserGroup>(url,user_group, {headers,params})

  }
}
