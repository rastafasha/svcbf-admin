import { Component, OnInit } from '@angular/core';
import { AliadoService } from '../../../services/aliados.service';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-forms-aliados',
  templateUrl: './forms-aliados.component.html',
  styleUrls: ['./forms-aliados.component.css']
})
export class FormsAliadosComponent implements OnInit {


  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;

  aliadoForm: UntypedFormGroup;
  public Editor = DecoupledEditor;

  constructor(
    private fb: UntypedFormBuilder,
    private aliadoService: AliadoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Aliado';
      this.aliadoService.getAliado(+id).subscribe(
        res => {
          this.aliadoForm.patchValue({
            title: res.title,
            enlace: res.enlace,
            target: res.target,
            is_active: res.is_active,
            id: res.id
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create Aliado';
    }

    this.aliadoForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      enlace: [''],
      target: [''],
      is_active: ['1'],
      image: [''],
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.aliadoForm.get('image').setValue(file);
    }
  }

  get title() { return this.aliadoForm.get('title'); }
  get enlace() { return this.aliadoForm.get('enlace'); }
  get target() { return this.aliadoForm.get('target'); }

  onSubmit () {
    const formData = new FormData();
    formData.append('title', this.aliadoForm.get('title').value);
    formData.append('enlace', this.aliadoForm.get('enlace').value);
    formData.append('target', this.aliadoForm.get('target').value);
    formData.append('is_active', this.aliadoForm.get('is_active').value);
    formData.append('image', this.aliadoForm.get('image').value);

    const id = this.aliadoForm.get('id').value;

    if (id) {
      this.aliadoService.updateAliado(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/aliados']);
          }
        },
        error => this.error = error
      );
    } else {
      this.aliadoService.createAliado(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/aliados']);
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
