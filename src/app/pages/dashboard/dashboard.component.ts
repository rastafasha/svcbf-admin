import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  error: string;

  users: User;

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.userService.getUsers().subscribe(
      (data: User) => this.users = data,
      error => this.error = error
    );
  }
}
