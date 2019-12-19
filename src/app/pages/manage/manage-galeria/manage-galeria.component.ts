import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../../services/galeria.service';
import { Galeria } from '../../../models/galeria';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

@Component({
  selector: 'app-manage-galeria',
  templateUrl: './manage-galeria.component.html',
  styleUrls: ['./manage-galeria.component.css']
})
export class ManageGaleriaComponent implements OnInit {

  title = 'Administrar Galería';
  galerias: Galeria;
  error: string;
  data:string;


  p: Number = 1;
  count: Number = 8;

  doctores;
  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  constructor(
    public galeriaService: GaleriaService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }


  ngOnInit() {
    this.galeriaService.getGalerias().subscribe(
      (data: Galeria) => this.galerias = data,
      error => this.error = error
    );
    
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.galeriaService.deleteGaleria(+id).subscribe(
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
