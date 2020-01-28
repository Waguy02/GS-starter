import { camelize } from '@angular-devkit/core/src/utils/strings';
import { Parcelle} from './parcelle';
import { ParcelleFilter } from './parcelle-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

  
  
  
    import { EspeceService
  } from '../espece/espece.service';
  import { Espece} from '../espece/espece';
import { EspeceFilter} from '../espece/espece-filter';

  
  
  



const caster = require('gs-cast');
const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ParcelleService {
  parcelleList: Parcelle[] =[]; 
    api = 'http://localhost:5000/api/parcelle';

  constructor(private http: HttpClient,

    private especeService: EspeceService, 
    
    ) {
  }

  findById(id: string): Observable <Parcelle>{
    const url = `${this.api}/${id}`;
    const params = { _id: id
  };
  return this.http.get <Parcelle>(url, { params, headers });
}

load(filter: ParcelleFilter): void {
  this.find(filter).subscribe(result =>{
    this.parcelleList = result;
    caster.arrayCast(this.parcelleList, Parcelle)
    for (var item of result) {
  
     
      var id_espece: any = item.espece;

      
        this.especeService.findById(id_espece).
          subscribe(data =>{
            caster.singleCast(data, Espece);
            item.espece= data;

          });


        
        


          }





  },
    err =>{
      console.error('error loading', err);
    }
  );
}

find(filter: ParcelleFilter): Observable <Parcelle[] >{
  const params = {
    'espece': filter.espece, 
    };

return this.http.get <Parcelle[] >(this.api, { params, headers });
  }

save(entity: Parcelle): Observable <Parcelle>{
  let params = new HttpParams();
  let url = '';
  if(entity._id) {
  url = `${this.api}/${entity._id.toString()
} `;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Parcelle>(url, entity, {headers, params});
    } else {
      url = `${ this.api } `;
      return this.http.post<Parcelle>(url, entity, {headers, params});
    }
  }

  delete(entity: Parcelle): Observable<Parcelle>{
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${ this.api } /${entity._id.toString()}`;
params = new HttpParams().set('ID', entity._id.toString());
return this.http.delete <Parcelle>(url, { headers, params });
    }
return null;
  }
}

