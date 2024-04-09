import { Component, Input, OnInit, Output } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() directorios: Directorio;

  error: string;

  doctor;

  constructor(
    private directorioService: DirectorioService,
    private activatedRoute: ActivatedRoute,

    ) { }

  ngOnInit() {
    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );

    console.log(this.directorios);
    console.log(this.directorios[0].id);
    this.activatedRoute.params.subscribe( ({id}) => this.getDoctor(id));

  }

  getDoctor(id:number){
    id = this.directorios.id
    this.directorioService.getDirectorio(id).subscribe(
      res=>{
        this.doctor = res;
      }
    )
    console.log(this.doctor.id)
  }

}
