import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AuthModule } from './auth/auth.module';


// componentes
import { AppComponent } from './app.component';
// Rutas
import {APP_ROUTES} from './app.routes';

// modulos
import { PagesModule } from './pages/pages.modulo';

// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


//import * as $ from "jquery";


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    HttpClientModule,
    AuthModule,
    CKEditorModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
