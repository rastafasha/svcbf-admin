import { Injectable } from '@angular/core';
import { Galeria } from '../models/galeria';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getGalerias() {
    return this.http.get<Galeria>(this.serverUrl + 'api_galeria/adminGalerias/').pipe(
      catchError(this.handleError)
    );
  }

  getGaleria(id: number) {
    return this.http.get<Galeria>(this.serverUrl + 'api_galeria/adminGaleria/' + id).pipe(
      catchError(this.handleError)
    );
  }Galeria
  createGaleria(galeria) {
    return this.http.post<any>(this.serverUrl + 'api_galeria/createGaleria/', galeria)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateGaleria(galeria, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_galeria/updateGaleria/' + id, galeria)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteGaleria(id: number) {
    return this.http.delete(this.serverUrl + 'api_galeria/deleteGaleria/' + id).pipe(
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
