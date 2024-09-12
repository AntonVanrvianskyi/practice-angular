import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersPageComponent },
      { path: 'posts', component: PostsPageComponent },
    ],
  },
];
