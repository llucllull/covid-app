import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(private http: HttpClient) { }

  getDadesGlobals(){
    const apiURL = "https://api.covid19api.com/summary";
    return this.http.get(apiURL);
  } 

  getDadesPaisosCompletes(pais:string){
    const apiURL = 'https://api.covid19api.com/country/'+pais;
    return this.http.get(apiURL);
  }

}
