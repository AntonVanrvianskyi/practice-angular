import { IUser } from '@/interfaces/user.interface';
import { UserService } from '@/services/user.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css',
})
export class UserDetailsPageComponent {
  user: IUser;
  id: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSevice: UserService
  ) {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IUser;
      if (state) {
        this.user = state;
      }
      if (!state) {
        this.userSevice.getById(id).subscribe((user) => (this.user = user));
      }
    });
  }
}
