import { User } from './user';
import { UserFilter } from './user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class UserService {
  userList: User[] = [];
  api = 'http://localhost:5500/rh/user';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<User> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<User>(url, {params, headers});
  }

  load(filter: UserFilter): void {
    this.find(filter).subscribe(result => {
        this.userList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: UserFilter): Observable<User[]> {
    const params = {
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
