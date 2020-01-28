import { Test } from './test';
import { TestFilter } from './test-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class TestService {
  testList: Test[] = [];
  api = 'http://localhost:5000/api/espece';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Test> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Test>(url, {params, headers});
  }

  load(filter: TestFilter): void {
    this.find(filter).subscribe(result => {
        this.testList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TestFilter): Observable<Test[]> {
    const params = {
    };

    return this.http.get<Test[]>(this.api, {params, headers});
  }

  save(entity: Test): Observable<Test> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Test>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Test>(url, entity, {headers, params});
    }
  }

  delete(entity: Test): Observable<Test> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Test>(url, {headers, params});
    }
    return null;
  }
}

