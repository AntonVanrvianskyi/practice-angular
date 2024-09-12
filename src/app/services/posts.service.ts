import { urls } from '@/constants/urls';
import { IPost } from '@/interfaces/post.inteface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private cache: Observable<IPost[]> | null = null;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IPost[]> {
    if (!this.cache) {
      this.cache = this.httpClient
        .get<IPost[]>(urls.posts.base)
        .pipe(
          shareReplay(1),
          catchError((error) => {
            this.cache = null;
            throw error;
          })
        );
    }
    return this.cache;
  }
}
