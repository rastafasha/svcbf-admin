import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  serverUrl = environment.baseUrl;
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private http: HttpClient;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getContacts() {
    return this.http.get<Contact>(this.serverUrl + 'api_contact/adminContacts/').pipe(
      catchError(this.handleError)
    );
  }

  contactForm(formdata: Contact) {
    return this.http.post<Contact>(this.serverUrl + 'api_contact/contact/', formdata, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteContact(id: number) {
    return this.http.delete(this.serverUrl + 'api_contact/deleteContact/' + id).pipe(
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
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
