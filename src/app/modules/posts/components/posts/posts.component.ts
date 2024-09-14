import { IPost } from '@/interfaces/post.inteface';
import { PostsService } from '@/services/posts/posts.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() posts: IPost[];

}
