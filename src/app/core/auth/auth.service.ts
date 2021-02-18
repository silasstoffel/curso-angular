import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(userName: string, password: string) {
    var endpoint = `${BASE_URL}/user/login`;
    return this.http
      .post(endpoint, { userName, password }, { observe: 'response' })
      .pipe(
        tap((res) => {
          const accessToken = res.headers.get('x-access-token');
          this.tokenService.store(accessToken);
        })
      );
  }
}
