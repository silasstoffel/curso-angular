import { Injectable } from '@angular/core';

const KEY = '@authtoken';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor() {}

  store(token) {
    window.localStorage.setItem(KEY, token);
  }

  get() {
    return window.localStorage.getItem(KEY);
  }

  has() {
    return !!this.get();
  }

  remove() {
    window.localStorage.removeItem(KEY);
  }
}
