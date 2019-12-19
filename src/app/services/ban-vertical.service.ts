import { Injectable } from '@angular/core';
import { Banvertical } from '../models/ban-vertical';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanverticalService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBanverticals() {
    return this.http.get<Banvertical>(this.serverUrl + 'api_banvertical/adminBanverticals/').pipe(
      catchError(this.handleError)
    );
  }

  getBanvertical(id: number) {
    return this.http.get<Banvertical>(this.serverUrl + 'api_banvertical/adminBanvertical/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createBanvertical(banhorizontal) {
    return this.http.post<any>(this.serverUrl + 'api_banvertical/createBanvertical/', banhorizontal)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateBanvertical(banhorizontal, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_banvertical/updateBanvertical/' + id, banhorizontal)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteBanvertical(id: number) {
    return this.http.delete(this.serverUrl + 'api_banvertical/deleteBanvertical/' + id).pipe(
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
