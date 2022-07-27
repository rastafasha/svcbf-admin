import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../../services/documento.service';
import { Documento } from '../../../models/documentos';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

@Component({
  selector: 'app-manage-documentos',
  templateUrl: './manage-documentos.component.html',
  styleUrls: ['./manage-documentos.component.css']
})
export class ManageDocumentosComponent implements OnInit {

  title = 'Manage Documento';
  documentos: Documento;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 10;

  constructor(
    public documentoService: DocumentoService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.documentoService.getDocumentos().subscribe(
      (data: Documento) => this.documentos = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.documentoService.deleteDocumento(+id).subscribe(
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
