import { Component, OnInit } from '@angular/core';
import { CongresoService } from '../../../services/congreso.service';
import { Congreso } from '../../../models/congreso';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

import {ExcelService} from '../../../services/excel.service';

@Component({
  selector: 'app-manage-congresopagos',
  templateUrl: './manage-congresopagos.component.html',
  styleUrls: ['./manage-congresopagos.component.css']
})
export class ManageCongresopagosComponent implements OnInit {


  title = 'Administrar pagos Congreso';
  congresos: Congreso;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 8;
  data: any[];



  constructor(
    public congresoService: CongresoService,
    private location: Location,
    private excelService:ExcelService,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }



  ngOnInit() {
    this.congresoService.getCongresos().subscribe(
      (data: Congreso) => this.congresos = data,
      error => this.error = error
    );

  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.congresoService.deleteCongreso(+id).subscribe(
        res => {
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


  exportAsXLSX():void {
    this.congresoService.exportAsExcelFile( this.data, 'PagosCongreso2020-');
 }


}
