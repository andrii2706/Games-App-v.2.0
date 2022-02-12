import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDevelopersDetails, IDevelopersFull} from "../interfaces/IDevelopers";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  developersUrl = 'https://api.rawg.io/api/developers'
  key = '75680a18d0894f90a57b6e2070349042'
  basicUrl = 'https://api.rawg.io/api/developers?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    public httpClient: HttpClient
  ) {
  }

  getAllDevelopers(page: number, filter = {}): Observable<IDevelopersFull> {
    return this.httpClient.get<IDevelopersFull>(this.developersUrl, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
          page: page,
          ...filter
        }
      })
    })
  }

  getCountOfDevelopers(): Observable<IDevelopersFull> {
    return this.httpClient.get<IDevelopersFull>(`${this.basicUrl}`)
  }

  getDevelopersById(id: number): Observable<IDevelopersDetails> {
    return this.httpClient.get<IDevelopersDetails>(`${this.developersUrl}/${id}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key
        }
      })
    })
  }

}
