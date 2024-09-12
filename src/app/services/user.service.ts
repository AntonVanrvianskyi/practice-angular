import { urls } from '@/constants/urls';
import { IUser } from '@/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cache: Observable<IUser[]> | null = null;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IUser[]> {
    if (!this.cache) {
      this.cache = this.httpClient.get<IUser[]>(urls.users.base).pipe(
        shareReplay(1),
        catchError((err) => {
          this.cache = null;
          throw err;
        })
      );
    }
    return this.cache;

  }

  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users.byId(id));
  }
}
