import { Parcelletest } from './parcelletest';
import { ParcelletestFilter } from './parcelletest-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ParcelletestService {
  parcelletestList: Parcelletest[] = [];
  api = 'http://localhost:5000/api/parcelle';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Parcelletest> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Parcelletest>(url, {params, headers});
  }

  load(filter: ParcelletestFilter): void {
    this.find(filter).subscribe(result => {
        this.parcelletestList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ParcelletestFilter): Observable<Parcelletest[]> {
    const params = {
      'espece': filter.espece,
    };

    return this.http.get<Parcelletest[]>(this.api, {params, headers});
  }

  save(entity: Parcelletest): Observable<Parcelletest> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Parcelletest>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Parcelletest>(url, entity, {headers, params});
    }
  }

  delete(entity: Parcelletest): Observable<Parcelletest> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Parcelletest>(url, {headers, params});
    }
    return null;
  }
}

