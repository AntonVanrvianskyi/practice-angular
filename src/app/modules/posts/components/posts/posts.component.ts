import { IPost } from '@/interfaces/post.inteface';
import { PostsService } from '@/services/posts.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe((data) => (this.posts = data));
  }
}
