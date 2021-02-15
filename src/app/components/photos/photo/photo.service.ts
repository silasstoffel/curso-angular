import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_BASE_URL = "http://localhost:3000";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(username: string) {
    return this.http.get<Object[]>(`${API_BASE_URL}/${username}/photos`);
  }
}
