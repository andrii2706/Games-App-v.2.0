import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGames, IGamesDetails, IGameTrailer, IGameTrailers, IScreenShots} from "../interfaces/Igames";
import { IAchivments} from "../interfaces/IAchivments";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = 'https://api.rawg.io/api/games'
  screenShot = '/screenshots'
  movies = '/movies'
  achievements = '/achievements'
  key = '75680a18d0894f90a57b6e2070349042'
  basicUrl = 'https://api.rawg.io/api/games?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    public httpClient: HttpClient
  ) {
  }

  getTotalItem(): Observable<IGames> {
    return this.httpClient.get<IGames>(this.basicUrl);
  }

  getGames(NewPage: number, filter = {}): Observable<IGames> {
    return this.httpClient.get<IGames>(this.url, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
          page: NewPage,
          ...filter
        }
      })
    })
  }

  getGameById(id: number): Observable<IGamesDetails> {
    return this.httpClient.get<IGamesDetails>(`${this.url}/${id}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
        }
      })
    })
  }

  getGameScreenShots(id: number): Observable<IScreenShots> {
    return this.httpClient.get<IScreenShots>(`${this.url}/${id}${this.screenShot}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key
        }
      })
    })
  }

  getGameTrailers(id: number): Observable<IGameTrailers> {
    return this.httpClient.get<IGameTrailers>(`${this.url}/${id}${this.movies}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key
        }
      })
    })
  }

  getTheAchivements(id: number): Observable<IAchivments> {
    return this.httpClient.get<IAchivments>(`${this.url}/${id}${this.achievements}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
        }
      })
    })
  }

}
