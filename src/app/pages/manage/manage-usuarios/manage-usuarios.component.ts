import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { User } from '../../../models/users';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

@Component({
  selector: 'app-manage-usuarios',
  templateUrl: './manage-usuarios.component.html',
  styleUrls: ['./manage-usuarios.component.css']
})
export class ManageUsuariosComponent implements OnInit {

  
  title = 'Usuarios Registrados';
  users: User;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 5;

  constructor(
    public userService: UserService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: User) => this.users = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.userService.deleteUser(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
