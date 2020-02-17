import { camelize } from '@angular-devkit/core/src/utils/strings';
import { Espece} from './espece';
import { EspeceFilter } from './espece-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';







const caster = require('angular-crud/gs-cast');
const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class EspeceService {
  especeList: Espece[] =[];
    api = 'http://localhost:5000/api/espece';

  constructor(private http: HttpClient,



    ) {
  }

  findById(id: string): Observable <Espece>{
    const url = `${this.api}/${id}`;
    const params = { _id: id
  };
  return this.http.get <Espece>(url, { params, headers });
}

load(filter: EspeceFilter): void {
  this.find(filter).subscribe(result =>{
    this.especeList = result;
    caster.arrayCast(this.especeList, Espece)
    for (var item of result) {





          }





  },
    err =>{
      console.error('error loading', err);
    }
  );
}

find(filter: EspeceFilter): Observable <Espece[] >{
  const params = {
    };

return this.http.get <Espece[] >(this.api, { params, headers });
  }

save(entity: Espece): Observable <Espece>{
  let params = new HttpParams();
  let url = '';
  if(entity._id) {
  url = `${this.api}/${entity._id.toString()
} `;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Espece>(url, entity, {headers, params});
    } else {
      url = `${ this.api } `;
      return this.http.post<Espece>(url, entity, {headers, params});
    }
  }

  delete(entity: Espece): Observable<Espece>{
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${ this.api } /${entity._id.toString()}`;
params = new HttpParams().set('ID', entity._id.toString());
return this.http.delete <Espece>(url, { headers, params });
    }
return null;
  }
}

