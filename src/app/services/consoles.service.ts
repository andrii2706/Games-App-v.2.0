import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IConsoles} from "../interfaces/IConsoles";

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(
    public httpClient:HttpClient
  ) { }
  key = '75680a18d0894f90a57b6e2070349042'
  consolesUrl = 'https://api.rawg.io/api/creators'


  getAllConsoles (page: number, filter = {}):Observable<IConsoles>{
    return this.httpClient.get<IConsoles>(this.consolesUrl, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
          page:  page,
          ...filter
        }
      })
    })
  }
  getTotalItemsConsoles(): Observable<IConsoles>{
    return this.httpClient.get<IConsoles>(`${this.consolesUrl}`, {
      params: new HttpParams({
        fromObject :{
          key :  this.key
        }
      })
    })
  }
}
