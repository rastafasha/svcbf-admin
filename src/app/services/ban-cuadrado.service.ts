import { Injectable } from '@angular/core';
import { Bancuadrado } from '../models/ban-cuadrado';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanncuadradoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBancuadrados() {
    return this.http.get<Bancuadrado>(this.serverUrl + 'api_bancuadrado/adminBancuadrados/').pipe(
      catchError(this.handleError)
    );
  }

  getBancuadrado(id: number) {
    return this.http.get<Bancuadrado>(this.serverUrl + 'api_bancuadrado/adminBancuadrado/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createBancuadrado(bancuadrado) {
    return this.http.post<any>(this.serverUrl + 'api_bancuadrado/createBancuadrado/', bancuadrado)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateBancuadrado(bancuadrado, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_bancuadrado/updateBancuadrado/' + id, bancuadrado)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteBancuadrado(id: number) {
    return this.http.delete(this.serverUrl + 'api_bancuadrado/deleteBancuadrado/' + id).pipe(
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
