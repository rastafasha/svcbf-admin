import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../../services/directorio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Location } from '@angular/common';
import { Directorio } from 'src/app/models/directorio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms-directorio',
  templateUrl: './forms-directorio.component.html',
  styleUrls: ['./forms-directorio.component.css']
})
export class FormsDirectorioComponent implements OnInit {


  /**
   * Editor type area wyswyg
   */
  public Editor = DecoupledEditor;
  public Editor1 = DecoupledEditor;
  public editorData = `<p>This is a CKEditor 4 WYSIWYG editor instance created with Angular.</p>`;

  /**
   * Formulario que contiene los filtros de busqueda de las personas
   */

  directorioForm: FormGroup;
  imagePath: string;

  infoDirectorio: Directorio;

  /**
   * propiedad encargada de definir si se muestran los mensajes de validacion formulario de usuario
   * @property {boolean} mostrarMensajesVU
   */
  public mostrarMensajesVU = false;

  /**
   * mensaje cuando es un campo obligatorio
   * @property {string}
   */
   public static campoObligatorio: string = 'El Campo es requerido';


  error: string;
  uploadError: string;


  pageTitle: string;

  public imagenSubir: File;
  public imgTemp: any = null;

  /**
   * Propiedad del codigoQR
   */
   directorio: Directorio;
  id: string | null;

  vCardInfo:string;
  value: string;
  display = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  href : string;
  vcard: string;

  constructor(
    private fb: FormBuilder,
    private directorioService: DirectorioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}




  ngOnInit() {
    // this.iniciarFormulario();
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormulario(id));


  }

  /**
   * @method: Permite iniciar formulario y obtener la info del id
   * @author: malcolm
   * @since: 27/06/2022
   */



  iniciarFormulario(id:number){
    // const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Editar Directorio';
      this.directorioService.getDirectorio(+id).subscribe(
        res => {
          this.directorioForm.patchValue({
            id: res.id,
            nombre: res.nombre,
            surname: res.surname,
            especialidad: res.especialidad,
            org: res.org,
            universidad: res.universidad,
            ano: res.ano,
            website: res.website,
            email: res.email,
            direccion: res.direccion,
            direccion1: res.direccion1,
            estado: res.estado,
            ciudad: res.ciudad,
            telefonos: res.telefonos,
            tel1: res.tel1,
            telhome: res.telhome,
            telmovil: res.telmovil,
            telprincipal: res.telprincipal,
            facebook: res.facebook,
            instagram: res.instagram,
            twitter: res.twitter,
            linkedin: res.linkedin,
            vcard: this.vCardInfo,
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
      surname: ['', Validators.required],
      especialidad: ['', Validators.required],
      universidad: ['', Validators.required],
      ano: [''],
      org: ['SVCBMF'],
      website: [''],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      direccion1: [''],
      estado: [''],
      ciudad: [''],
      telefonos: [''],
      tel1: [''],
      telhome: [''],
      telmovil: [''],
      telprincipal: ['', Validators.required],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      linkedin: [''],
      vcard: [this.vCardInfo],
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
  get surname() { return this.directorioForm.get('surname'); }
  get especialidad() { return this.directorioForm.get('especialidad'); }
  get universidad() { return this.directorioForm.get('universidad'); }
  get org() { return this.directorioForm.get('org'); }
  get ano() { return this.directorioForm.get('ano'); }
  get website() { return this.directorioForm.get('website'); }
  get email() { return this.directorioForm.get('email'); }
  get direccion() { return this.directorioForm.get('direccion'); }
  get direccion1() { return this.directorioForm.get('direccion1'); }
  get estado() { return this.directorioForm.get('estado'); }
  get ciudad() { return this.directorioForm.get('ciudad'); }
  get telefonos() { return this.directorioForm.get('telefonos'); }
  get tel1() { return this.directorioForm.get('tel1'); }
  get telhome() { return this.directorioForm.get('telhome'); }
  get telmovil() { return this.directorioForm.get('telmovil'); }
  get telprincipal() { return this.directorioForm.get('telprincipal'); }
  get facebook() { return this.directorioForm.get('facebook'); }
  get instagram() { return this.directorioForm.get('instagram'); }
  get twitter() { return this.directorioForm.get('twitter'); }
  get linkedin() { return this.directorioForm.get('linkedin'); }

  guardarDirectorio() {

    // validacion formulario
    // if (this.directorioForm.invalid) {
    //   this.mostrarMensajesVU = true;
    //   return;
    // }
    this.formularioVcardGe();

    const formData = new FormData();
    formData.append('nombre', this.directorioForm.get('nombre').value);
    formData.append('surname', this.directorioForm.get('surname').value);
    formData.append('especialidad', this.directorioForm.get('especialidad').value);
    formData.append('universidad', this.directorioForm.get('universidad').value);
    formData.append('org', this.directorioForm.get('org').value);
    formData.append('ano', this.directorioForm.get('ano').value);
    formData.append('website', this.directorioForm.get('website').value);
    formData.append('email', this.directorioForm.get('email').value);
    formData.append('direccion', this.directorioForm.get('direccion').value);
    formData.append('direccion1', this.directorioForm.get('direccion1').value);
    formData.append('estado', this.directorioForm.get('estado').value);
    formData.append('ciudad', this.directorioForm.get('ciudad').value);
    formData.append('telefonos', this.directorioForm.get('telefonos').value);
    formData.append('tel1', this.directorioForm.get('tel1').value);
    formData.append('telhome', this.directorioForm.get('telhome').value);
    formData.append('telmovil', this.directorioForm.get('telmovil').value);
    formData.append('telprincipal', this.directorioForm.get('telprincipal').value);
    formData.append('facebook', this.directorioForm.get('facebook').value);
    formData.append('instagram', this.directorioForm.get('instagram').value);
    formData.append('twitter', this.directorioForm.get('twitter').value);
    formData.append('linkedin', this.directorioForm.get('linkedin').value);
    formData.append('image', this.directorioForm.get('image').value);
    formData.append('vcard', this.vCardInfo);

    const id = this.directorioForm.get('id').value;

    if (id) {
      this.directorioService.updateDirectorio(formData, +id).subscribe(
        res => {
          if (this.error) {
            // this.uploadError = res.message;
            Swal.fire('Error', this.uploadError, 'error');
          } else {
            // this.router.navigate(['/directorio']);
            this.infoDirectorio = res;
            Swal.fire('Guardado', 'Los cambios fueron actualizados', 'success');
          }
        },
        error => this.error = error
      );
    } else {
      this.directorioService.createDirectorio(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
            Swal.fire('Error', this.uploadError, 'error');
          } else {
            this.infoDirectorio = res;
            Swal.fire('Guardado', 'Los cambios fueron creados', 'success');
            this.router.navigate(['/directorio']);
          }
        },
        error => this.error = error
      );
    }
    this.generateQRCode();

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
/**
   * @method: Permite crear el qr
   * @author: malcolm
   * @since: 11/07/2022
   */



 formularioVcardGe(){


  let {nombre, surname , org , website , facebook, instagram,
    linkedin , twitter , email , image , especialidad , direccion, direccion1,
    tel1 , telhome , telmovil , telprincipal} = this.directorioForm.getRawValue();

    this.vCardInfo = `BEGIN:VCARD
VERSION:3.0
N:${surname};${nombre}
FN:${surname} ${nombre}
ORG:${org}
URL:${website}
URL:${facebook}
URL:${instagram}
URL:${linkedin}
URL:${twitter}
EMAIL:${email}
PHOTO:${image}
TITLE:${especialidad}
ADR;TYPE=work:${direccion}
ADR;TYPE=home:${direccion1}
TEL;TYPE=voice,work,oref:${tel1}
TEL;TYPE=voice,home,oref:${telhome}
TEL;TYPE=voice,mobile,oref:${telmovil}
TEL;TYPE=voice,first,oref:${telprincipal}
END:VCARD
    `
    // console.log(this.vCardInfo);
}
  /**
   * @method: Descarga la imagen del qr
   * @author: malcolm
   * @since: 11/07/2022
   */

  downloadImage(){

    const box = document.getElementById('box');
    box.parentElement.classList.add('parent')

    box.hasAttribute('img');

    this.href = document.getElementsByClassName('parent')[0].querySelector('img').src;

    // console.log('img', this.href);
  }

  /**
 * @method: Genera la imagen del qr
 * @author: malcolm
 * @since: 11/07/2022
 */

generateQRCode(){
  if( this.directorioForm.valid){
    this.display = true;
    // alert("Please enter the name");
  }
  return false;


}



}
