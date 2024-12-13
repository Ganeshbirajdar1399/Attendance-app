import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload, Student } from '../model/commen.model';
import { ApiEndpoint } from '../constants/constant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(payload: RegisterPayload): Observable<any>{
    return this._http.post<ApiResponse<Student>>(`${ApiEndpoint.Auth.Register}`,payload)
  };

  login(payload: LoginPayload): Observable<any>{
return this._http.post<ApiResponse<Student>>(`${ApiEndpoint.Auth.Login}`,payload)
  };
  
  me(): Observable<any>{
    return this._http.get<ApiResponse<Student>>(`${ApiEndpoint.Auth.Me}`)
  };
}
