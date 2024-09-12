import { PostsComponent } from '@/components/posts/posts.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
