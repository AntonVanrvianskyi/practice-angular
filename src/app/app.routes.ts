import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UsersPageComponent } from './modules/users/pages/users-page/users-page.component';
import { PostsPageComponent } from './modules/posts/pages/posts-page.component';
import { UserDetailsPageComponent } from './modules/users/pages/user-details-page/user-details-page.component';
import { routePath } from './routes';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // {path: "", redirectTo: "users", pathMatch: "full"},
      {
        path: routePath.users.index,
        loadChildren: () =>
          import('@/modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: routePath.posts.index,
        component: PostsPageComponent,
        // loadChildren: () =>
        //   import('@/modules/posts/posts.module').then((m) => m.PostsModule),
      },
      // {
      //   path: 'users',
      //   loadComponent: () =>
      //     import('@/modules/users/pages/users-page/users-page.component').then(
      //       (m) => m.UsersPageComponent
      //     ),
      //   children: [
      //     {
      //       path: ':id',
      //       component: UserDetailsPageComponent,
      //     },
      //   ],
      // },
      // {
      //   path: 'posts',
      //   loadComponent: () =>
      //     import('@/modules/posts/pages/posts-page.component').then(
      //       (m) => m.PostsPageComponent
      //     ),
      // },
    ],
  },
];
