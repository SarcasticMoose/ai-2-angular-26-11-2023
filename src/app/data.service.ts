import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsList} from "./items-list";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://labjwt.zecer.wi.zut.edu.pl/api'
  constructor(private httpClient: HttpClient) { }

  public items() : Observable<ItemsList>{
    const reqHeader  = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    })

    return this.httpClient.get<ItemsList>(`${this.baseUrl}/items`,{headers: reqHeader})
  }
  public users() : Observable<User[]>{
    const reqHeader  = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    })
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`,{headers:reqHeader})
  }
}

