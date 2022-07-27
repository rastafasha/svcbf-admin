import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../../services/directorio.service';
import { Directorio } from '../../../models/directorio';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  directorios: Directorio;
  title = 'Buscador';

  error: string;


  doctores;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;

  classApplied = true;

  heroes = Directorio;
  selectedHero?: Directorio;



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
    window.scrollTo(0,0);



  }

  toggleClass(id: number){
    this.classApplied = !this.classApplied;
  }




  search( text: string) {// funciona, devuelve la busqueda


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api_directorio/search?text=' + text )
      .toPromise()
      .then(doctores=>{
        this.doctores= {'results': JSON.stringify(doctores, null),

        'json': ()=>{
          return doctores;
        }

      };

      // devolver el array
      const mapped = Object.keys(doctores)
      .map(key => ({type: key, value: doctores[key]}));



      console.log(doctores);
      this.doctores = doctores;

      });

  }


  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
