import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Fotoceo } from '../models/fotoceo';

@Injectable({
  providedIn: 'root'
})
export class FotoceoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFotoceos() {
    return this.http.get<Fotoceo>(this.serverUrl + 'api_fotoceo/adminFotoceos/').pipe(
      catchError(this.handleError)
    );
  }

  getFotoceo(id: number) {
    return this.http.get<Fotoceo>(this.serverUrl + 'api_fotoceo/adminFotoceo/' + id).pipe(
      catchError(this.handleError)
    );
  }


  createFotoceo(fotoceo) {
    return this.http.post<any>(this.serverUrl + 'api_fotoceo/createFotoceo/', fotoceo)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateFotoceo(fotoceo, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_fotoceo/updateFotoceo/' + id, fotoceo)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteFotoceo(id: number) {
    return this.http.delete(this.serverUrl + 'api_fotoceo/deleteFotoceo/' + id).pipe(
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
