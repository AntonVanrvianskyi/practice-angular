import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { PostsService } from './posts.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  getPaginateItems<T>(limit: number): Observable<T[]> {
    return this.activatedRoute.queryParams.pipe(
      switchMap(({ page }) => {
        return this.postService.getAll().pipe(
          map(posts => {
            const start = (page - 1) * limit;
            const end = page * limit;
            return posts.slice(start, end) as T[];
          })
        );
      })
    );
    
  }

}
