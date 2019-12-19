import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../../services/directorio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';


@Component({
  selector: 'app-forms-directorio',
  templateUrl: './forms-directorio.component.html',
  styleUrls: ['./forms-directorio.component.css']
})
export class FormsDirectorioComponent implements OnInit {

  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;

  directorioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private directorioService: DirectorioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Editar Directorio';
      this.directorioService.getDirectorio(+id).subscribe(
        res => {
          this.directorioForm.patchValue({
            id: res.id,
            nombre: res.nombre,
            especialidad: res.especialidad,
            universidad: res.universidad,
            ano: res.ano,
            website: res.website,
            email: res.email,
            direccion: res.direccion,
            estado: res.estado,
            ciudad: res.ciudad,
            telefonos: res.telefonos,
            facebook: res.facebook,
            instagram: res.instagram,
            twitter: res.twitter,
            linkedin: res.linkedin,
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Crear Directorio';
    }

    this.directorioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      universidad: ['', Validators.required],
      ano: ['', Validators.required],
      website: ['', Validators.required],
      email: ['', Validators.required],
      direccion: [''],
      estado: [''],
      ciudad: [''],
      telefonos: [''],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      linkedin: [''],
      image: [''],
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.directorioForm.get('image').setValue(file);
    }
  }

  get nombre() { return this.directorioForm.get('nombre'); }
  get especialidad() { return this.directorioForm.get('especialidad'); }
  get universidad() { return this.directorioForm.get('universidad'); }
  get ano() { return this.directorioForm.get('ano'); }
  get website() { return this.directorioForm.get('website'); }
  get email() { return this.directorioForm.get('email'); }
  get direccion() { return this.directorioForm.get('direccion'); }
  get estado() { return this.directorioForm.get('estado'); }
  get ciudad() { return this.directorioForm.get('ciudad'); }
  get telefonos() { return this.directorioForm.get('telefonos'); }
  get facebook() { return this.directorioForm.get('facebook'); }
  get instagram() { return this.directorioForm.get('instagram'); }
  get twitter() { return this.directorioForm.get('twitter'); }
  get linkedin() { return this.directorioForm.get('linkedin'); }

  onSubmit() {
    const formData = new FormData();
    formData.append('nombre', this.directorioForm.get('nombre').value);
    formData.append('especialidad', this.directorioForm.get('especialidad').value);
    formData.append('universidad', this.directorioForm.get('universidad').value);
    formData.append('ano', this.directorioForm.get('ano').value);
    formData.append('website', this.directorioForm.get('website').value);
    formData.append('email', this.directorioForm.get('email').value);
    formData.append('direccion', this.directorioForm.get('direccion').value);
    formData.append('estado', this.directorioForm.get('estado').value);
    formData.append('ciudad', this.directorioForm.get('ciudad').value);
    formData.append('telefonos', this.directorioForm.get('telefonos').value);
    formData.append('facebook', this.directorioForm.get('facebook').value);
    formData.append('instagram', this.directorioForm.get('instagram').value);
    formData.append('twitter', this.directorioForm.get('twitter').value);
    formData.append('linkedin', this.directorioForm.get('linkedin').value);
    formData.append('image', this.directorioForm.get('image').value);

    const id = this.directorioForm.get('id').value;

    if (id) {
      this.directorioService.updateDirectorio(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/directorio']);
          }
        },
        error => this.error = error
      );
    } else {
      this.directorioService.createDirectorio(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/directorio']);
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
