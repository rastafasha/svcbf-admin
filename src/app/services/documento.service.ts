import { Injectable } from '@angular/core';
import { Documento } from '../models/documentos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDocumentos() {
    return this.http.get<Documento>(this.serverUrl + 'api_documento/adminDocumentos/').pipe(
      catchError(this.handleError)
    );
  }

  getDocumento(id: number) {
    return this.http.get<Documento>(this.serverUrl + 'api_documento/adminDocumento/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createDocumento(documento) {
    return this.http.post<any>(this.serverUrl + 'api_documento/createDocumento/', documento)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateDocumento(documento, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_documento/updateDocumento/' + id, documento)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteDocumento(id: number) {
    return this.http.delete(this.serverUrl + 'api_documento/deleteDocumento/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
