import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(userName: string, password: string) {
    return this.http.post(`${BASE_URL}/user/login`, { userName, password });
  }
}
