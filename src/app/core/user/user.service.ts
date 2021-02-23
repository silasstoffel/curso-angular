import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
  userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.has() && this.decodeAndNotify();
  }

  store(token: string) {
    this.tokenService.store(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.remove();
    this.userSubject.next(null);
  }

  private decodeAndNotify() {
    const token = this.tokenService.get();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}
