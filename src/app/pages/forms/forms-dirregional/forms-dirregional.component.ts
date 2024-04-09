import { Component, OnInit } from '@angular/core';
import { DirregionalService } from '../../../services/dirregional.service';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';



@Component({
  selector: 'app-forms-dirregional',
  templateUrl: './forms-dirregional.component.html',
  styleUrls: ['./forms-dirregional.component.css']
})
export class FormsDirregionalComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;

  dirregionalForm: UntypedFormGroup;
  public Editor = DecoupledEditor;

  constructor(
    private fb: UntypedFormBuilder,
    private dirregionalService: DirregionalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Directiva Regional';
      this.dirregionalService.getDirRegional(+id).subscribe(
        res => {
          this.dirregionalForm.patchValue({
            title: res.title,
            presidente: res.presidente,
            secretario: res.secretario,
            tesorero: res.tesorero,
            vocal: res.vocal,
            primerSuplente: res.primerSuplente,
            id: res.id
          });
        }
      );
    } else {
      this.pageTitle = 'Create Directiva Regional';
    }

    this.dirregionalForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      presidente: ['', Validators.required],
      secretario: [''],
      tesorero: [''],
      vocal: [''],
      primerSuplente: [''],
    });
  }

  get title() { return this.dirregionalForm.get('title'); }
  get presidente() { return this.dirregionalForm.get('presidente'); }

  onSubmit () {
    const formData = new FormData();
    formData.append('title', this.dirregionalForm.get('title').value);
    formData.append('presidente', this.dirregionalForm.get('presidente').value);
    formData.append('secretario', this.dirregionalForm.get('secretario').value);
    formData.append('tesorero', this.dirregionalForm.get('tesorero').value);
    formData.append('vocal', this.dirregionalForm.get('vocal').value);
    formData.append('primerSuplente', this.dirregionalForm.get('primerSuplente').value);

    const id = this.dirregionalForm.get('id').value;

    if (id) {
      this.dirregionalService.updateDirRegional(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/dirregional']);
          }
        },
        error => this.error = error
      );
    } else {
      this.dirregionalService.createDirRegional(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/dirregional']);
          }
        },
        error => this.error = error
      );
    }
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}

}
