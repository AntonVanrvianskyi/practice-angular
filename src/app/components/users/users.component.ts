import { IUser } from '@/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { UserComponent } from "../user/user.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => (this.users = data));
  }
}
