import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthToken} from "./auth-token";
import {Observable, tap} from "rxjs";
import {AuthResponse} from "./auth-response";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "https://labjwt.zecer.wi.zut.edu.pl/api";
  constructor(
    private jwtHelper: JwtHelperService,
    private httpClient: HttpClient) { }

  public isAuthenticated():boolean{
  return !this.jwtHelper.isTokenExpired();
  }

  public loguout(){
      localStorage.removeItem("access_token");
  }
  public login(username: string, password: string): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.baseUrl}/auth/login`,{username,password})
      .pipe(
        tap(response => {
          console.debug("login() response",response);
          if(response.token){
            localStorage.setItem('access_token',response.token);
          }
          else{
            localStorage.removeItem('access_token');
          }
        })
      )
  }
  public isAdmin(): boolean{
    const token: AuthToken = this.jwtHelper.decodeToken() as AuthToken;
    if(!this.isAuthenticated()){
      return false;
    }
    return token && token.roles && token.roles.includes('ADMIN');
  }

  public getUserName():string | undefined{
    const token = this.jwtHelper.decodeToken() as AuthToken;
    return token?.sub;
  }
}


