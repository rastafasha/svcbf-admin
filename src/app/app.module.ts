import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';


// componentes
import { AppComponent } from './app.component';
// Rutas
import {APP_ROUTES} from './app.routes';

// modulos
import { PagesModule } from './pages/pages.module';
import {SharedModule} from './shared/shared.module';


// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ExcelService } from './services/excel.service';


// import * as $ from "jquery";

//qrcode
import { QRCodeModule } from 'angular2-qrcode';




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
    CKEditorModule,
    RouterModule,
    SharedModule,
    QRCodeModule
  ],
  providers: [httpInterceptorProviders, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
