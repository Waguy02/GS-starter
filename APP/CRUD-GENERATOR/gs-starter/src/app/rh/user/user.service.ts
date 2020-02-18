import { User } from './user';
import { UserFilter } from './user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class UserService {
  userList: User[] = [];
  api = environment.main_api+'/rh/user';
constructor(private http: HttpClient) {
  }
findById(id: string): Observable<User> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<User>(url, {params, headers});
  }
load(filter: UserFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.userList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: UserFilter): Observable<User[]> {
    const params = {
      'name': filter.name,
      'sexe': filter.sexe,
      'date_naissance': filter.date_naissance,
    };
return this.http.get<User[]>(this.api, {params, headers});
  }
save(entity: User): Observable<User> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<User>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<User>(url, entity, {headers, params});
    }
  }
delete(entity: User): Observable<User> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<User>(url, {headers, params});
    }
    return null;
  }
}
