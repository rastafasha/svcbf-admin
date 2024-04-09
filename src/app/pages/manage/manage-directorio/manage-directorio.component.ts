import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../../services/directorio.service';
import { Directorio } from '../../../models/directorio';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-directorio',
  templateUrl: './manage-directorio.component.html',
  styleUrls: ['./manage-directorio.component.css']
})
export class ManageDirectorioComponent implements OnInit {

  title = 'Administrar Directorio';
  directorios: Directorio;
  error: string;
  data:string;

  public Editor = DecoupledEditor;

  p: Number = 1;
  count: Number = 10;

  doctores;
  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  constructor(
    public directorioService: DirectorioService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }


  ngOnInit() {
    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );

  }

  onDelete(id: number) {
    if (
      // confirm('Are you sure want to delete id = ' + id)
      Swal.fire('Quieres Borrar?', 'Are you sure want to delete id = ' + id)
      ) {
        this.directorioService.deleteDirectorio(+id).subscribe(
          res => {
          Swal.fire('Borrado!', 'Los cambios fueron actualizados', 'success')
          //console.log(res);
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
