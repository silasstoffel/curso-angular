import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(userName: string, password: string) {
    var endpoint = `${BASE_URL}/user/login`;
    return this.http
      .post(endpoint, { userName, password }, { observe: 'response' })
      .pipe(
        tap((res) => {
          const accessToken = res.headers.get('x-access-token');
          this.userService.store(accessToken);
        })
      );
  }
}
