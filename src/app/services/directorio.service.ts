import { Injectable } from '@angular/core';
import { Directorio } from '../models/directorio';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDirectorios() {
    return this.http.get<Directorio>(this.serverUrl + 'api_directorio/adminDirectorios/').pipe(
      catchError(this.handleError)
    );
  }

  getDirectorio(id: number) {
    return this.http.get<Directorio>(this.serverUrl + 'api_directorio/adminDirectorio/' + id).pipe(
      catchError(this.handleError)
    );
  }


  createDirectorio(directorio) {
    return this.http.post<any>(this.serverUrl + 'api_directorio/createDirectorio/', directorio)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateDirectorio(directorio, id: number) {
    return this.http.post<Directorio>(this.serverUrl + 'api_directorio/updateDirectorio/' + id, directorio)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteDirectorio(id: number) {
    return this.http.delete(this.serverUrl + 'api_directorio/deleteDirectorio/' + id).pipe(
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
