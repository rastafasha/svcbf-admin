import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forms-users',
  templateUrl: './forms-users.component.html',
  styleUrls: ['./forms-users.component.css']
})
export class FormsUsersComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  password: string;

  userForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Usuario';
      this.userService.getUser(+id).subscribe(
        res => {
          this.userForm.patchValue({
            username: res.username,
            password: res.password,
            first_name: res.first_name,
            last_name: res.last_name,
            role: res.role,
            is_active: res.is_active,
            id: res.id
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create Usuario';
    }

    this.userForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      password: [''],
      first_name: ['', Validators.required],
      role: ['', Validators.required],
      last_name: [''],
      is_active: ['0'],
      image: [''],
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userForm.get('image').setValue(file);
    }
  }

  get username() { return this.userForm.get('username'); }
  get first_name() { return this.userForm.get('first_name'); }
  get last_name() { return this.userForm.get('last_name'); }
  get role() { return this.userForm.get('role'); }

  onSubmit () {
    const formData = new FormData();
    formData.append('username', this.userForm.get('username').value);
    formData.append('password', this.userForm.get('password').value);
    formData.append('role', this.userForm.get('role').value);
    formData.append('first_name', this.userForm.get('first_name').value);
    formData.append('last_name', this.userForm.get('last_name').value);
    formData.append('is_active', this.userForm.get('is_active').value);
    formData.append('image', this.userForm.get('image').value);

    const id = this.userForm.get('id').value;

    if (id) {
      this.userService.updateUser(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/usuarios']);
          }
        },
        error => this.error = error
      );
    } else {
      this.userService.createUser(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/usuarios']);
          }
        },
        error => this.error = error
      );
    }
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
