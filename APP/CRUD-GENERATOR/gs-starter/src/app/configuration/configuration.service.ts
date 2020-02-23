


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
interface Configuration {
  resourceServerA: string;
  resourceServerB: string;
  stage: string;
}

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  private readonly CONFIG_URL = 'assets/config/config.json';
  private configuration$: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  public loadConfigurations(): any {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Configuration>(this.CONFIG_URL).pipe(

        shareReplay(1)
      );
    }
    this.configuration$.toPromise().then(data=>this.parseConfiguration(data)).catch(err=>console.log(err));
    return this.configuration$;
  }


  public parseConfiguration(data):any{

      for(var key in data){
      environment[key]=data[key];
    }
    console.log(environment);


  }





}
