import { UsersComponent } from '@/components/users/users.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
