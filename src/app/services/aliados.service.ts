import { Injectable } from '@angular/core';
import { Aliado } from '../models/aliados';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AliadoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAliados() {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/adminAliados/').pipe(
      catchError(this.handleError)
    );
  }

  getAliado(id: number) {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/adminAliado/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createAliado(aliado) {
    return this.http.post<any>(this.serverUrl + 'api_aliados/createAliado/', aliado)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateAliado(aliado, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_aliados/updateAliado/' + id, aliado)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteAliado(id: number) {
    return this.http.delete(this.serverUrl + 'api_aliados/deleteAliado/' + id).pipe(
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
