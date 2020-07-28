import { Injectable } from '@angular/core';
import { Revista } from '../models/revista';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRevistas() {
    return this.http.get<Revista>(this.serverUrl + 'api_revista/adminRevistas/').pipe(
      catchError(this.handleError)
    );
  }

  getRevista(id: number) {
    return this.http.get<Revista>(this.serverUrl + 'api_revista/adminRevista/' + id).pipe(
      catchError(this.handleError)
    );
  }

  
  createRevista(revista) {
    return this.http.post<any>(this.serverUrl + 'api_revista/createRevista/', revista)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateRevista(revista, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_revista/updateRevista/' + id, revista)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteRevista(id: number) {
    return this.http.delete(this.serverUrl + 'api_revista/deleteRevista/' + id).pipe(
      catchError(this.handleError)
    );
  }


  // portada

  getImgrevista(id: number) {
    return this.http.get<Revista>(this.serverUrl + 'api_portada/adminImgrevista/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createImgrevista(revista) {
    return this.http.post<any>(this.serverUrl + 'api_portada/createImgRevista/', revista)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateImgrevista(revista, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_portada/updateImgRevista/' + id, revista)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteImgrevista(id: number) {
    return this.http.delete(this.serverUrl + 'api_portada/deleteImgRevista/' + id).pipe(
      catchError(this.handleError)
    );
  }Imgr
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
