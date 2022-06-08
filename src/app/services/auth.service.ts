import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }
  Registration(formValue:any):Observable<IUser>{
  return this.httpClient.post<IUser>(environment.registerURL, formValue)
  }
  SingIn(formValue:any):Observable<any>{
   return this.httpClient.get<any>(environment.registerURL, formValue)
  }
  LogOut(){

  }
}
