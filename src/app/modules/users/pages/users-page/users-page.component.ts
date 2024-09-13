import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from '../../components/users/users.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UsersComponent, RouterModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
