import { Injectable } from '@angular/core';
import { DirRegional } from '../models/dirregional';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirregionalService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDirRegionals() {
    return this.http.get<DirRegional>(this.serverUrl + 'api_dirregional/adminDirregionals/').pipe(
      catchError(this.handleError)
    );
  }

  getDirRegional(id: number) {
    return this.http.get<DirRegional>(this.serverUrl + 'api_dirregional/adminDirregional/' + id).pipe(
      catchError(this.handleError)
    );
  }


  createDirRegional(dirregional) {
    return this.http.post<any>(this.serverUrl + 'api_dirregional/createDirregional/', dirregional)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateDirRegional(dirregional, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_dirregional/updateDirregional/' + id, dirregional)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteDirRegional(id: number) {
    return this.http.delete(this.serverUrl + 'api_dirregional/deleteDirregional/' + id).pipe(
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
