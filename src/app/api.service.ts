import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:8080/api/";
 
  constructor(private http: HttpClient) {
  }
 
  shortenUrl(originalUrl:string): Observable<any> {
    const headers = { 'content-type': 'text/plain'}  
    console.log(originalUrl)
    return this.http.post(this.baseURL + 'shorturl', originalUrl,{'headers':headers, responseType: 'text'})
  }
 
  getOriginalUrl(originalUrl:string): Observable<any> {
    const headers = { 'content-type': 'text/plain'}  
    console.log(originalUrl)
    return this.http.post(this.baseURL + 'originalurl', originalUrl,{'headers':headers, responseType: 'text'})
  }

}