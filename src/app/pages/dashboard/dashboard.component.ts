import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/users.service';
import { CongresoService } from '../../services/congreso.service';
import{Congreso} from '../../models/congreso';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  error: string;

  users: User;
  congresos: Congreso;

  constructor(private userService: UserService, congresoService: CongresoService) {}

  ngOnInit() {

    this.userService.getUsers().subscribe(
      (data: User) => this.users = data,
      error => this.error = error
    );
    
  }


/**
 * funcion que realiza los calculos
 */
calcular() {
  // obtenemos todas las filas del tbody
  var filas=document.querySelectorAll("#total");

  var total=0;

  // recorremos cada una de las filas
  filas.forEach(function(e) {

      // obtenemos las columnas de cada fila
      var columnas=e.querySelectorAll("p");

      // obtenemos los valores de la cantidad y importe
      var cantidad=parseFloat(columnas[1].textContent);
      var importe=parseFloat(columnas[2].textContent);

      // mostramos el total por fila
      columnas[3].textContent=(cantidad*importe).toFixed(2);

      total+=cantidad*importe;
  });

  // mostramos la suma total
  var filas=document.querySelectorAll("#total");
  filas[1].textContent=total.toFixed(2);
}
}
