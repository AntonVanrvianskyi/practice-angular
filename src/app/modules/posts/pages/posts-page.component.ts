import { PaginationComponent } from '@/components/pagination/pagination.component';
import { IPost } from '@/interfaces/post.inteface';
import { PostsComponent } from '@/modules/posts/components/posts/posts.component';
import { PaginationService } from '@/services/posts/pagination.service';
import { PostsService } from '@/services/posts/posts.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [PostsComponent, PaginationComponent, CommonModule],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css',
})
export class PostsPageComponent implements OnInit {
  posts: IPost[];
  currentPage: number;
  constructor(
    private postService: PostsService,
    private paginationService: PaginationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params)
    // })
  }

  ngOnInit(): void {
    this.paginationService
      .getPaginateItems<IPost>(10)
      .subscribe((val) => (this.posts = val));
  }
  onNext() {}
}
