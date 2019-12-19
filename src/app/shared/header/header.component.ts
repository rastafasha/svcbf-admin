import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {


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
