import { Routes, RouterModule } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { routePath } from '@/routes';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    children: [
      {
        path: routePath.users.byId(':id'),
        component: UserDetailsPageComponent,
      },
    ],
  },
];

export const UsersRoutes = RouterModule.forChild(routes);
