import { Injectable } from '@angular/core';
import { Banhorizontal } from '../models/ban-horizontal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannhorizontalService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBanhorizontals() {
    return this.http.get<Banhorizontal>(this.serverUrl + 'api_banhorizontal/adminBanhorizontals/').pipe(
      catchError(this.handleError)
    );
  }

  getBanhorizontal(id: number) {
    return this.http.get<Banhorizontal>(this.serverUrl + 'api_banhorizontal/adminBanhorizontal/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createBanhorizontal(banhorizontal) {
    return this.http.post<any>(this.serverUrl + 'api_banhorizontal/createBanhorizontal/', banhorizontal)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateBanhorizontal(banhorizontal, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_banhorizontal/updateBanhorizontal/' + id, banhorizontal)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteBanhorizontal(id: number) {
    return this.http.delete(this.serverUrl + 'api_banhorizontal/deleteBanhorizontal/' + id).pipe(
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
