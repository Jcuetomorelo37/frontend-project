import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login (email: string, password: string):Observable <any>{
    const body = {email, password}
    return this.http.post('http://localhost:3001/api/users/login', body).pipe(
      map((response:any)=> response), catchError((error: any)=>{throw error})
    )
  }
}
