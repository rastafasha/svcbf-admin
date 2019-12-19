import { Injectable } from '@angular/core';
import { Afiliaciones } from '../models/afiliaciones';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AfiliacionesService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAfiliaciones() {
    return this.http.get<Afiliaciones>(this.serverUrl + 'api_afiliaciones/adminAfiliaciones/').pipe(
      catchError(this.handleError)
    );
  }

  getAfiliacione(id: number) {
    return this.http.get<Afiliaciones>(this.serverUrl + 'api_afiliaciones/adminAfiliacione/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createAfiliacione(afiliciaciones) {
    return this.http.post<any>(this.serverUrl + 'api_afiliaciones/createAfiliacione/', afiliciaciones)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateAfiliacione(afiliciaciones, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_afiliaciones/updateAfiliacione/' + id, afiliciaciones)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteAfiliacione(id: number) {
    return this.http.delete(this.serverUrl + 'api_afiliaciones/deleteAfiliacione/' + id).pipe(
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
