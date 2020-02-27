


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


  public loadConfigFiles() {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Configuration>(this.CONFIG_URL).pipe(

        shareReplay(1)
      );
    }
    return this.configuration$.toPromise();

  }

  public  async loadConfigurations() {
    const data= await  this.loadConfigFiles();
    this.parseConfigurationApis(data);this.parseConfigurationMain(data);
    console.log('find de lecture');

  }

  public parseConfigurationMain(data) {
    for (const key in data.main) {

      environment[key] = data.main[key];
    }



  }

  public parseConfigurationApis(data): any {

      for (const key in data.api_roots) {
      environment[key] = data.api_roots[key];
    }



  }





}
