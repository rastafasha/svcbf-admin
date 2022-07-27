import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

// pipe
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import {KeysPipe} from '../pipes/keys.pipe';
import { OrderModule } from 'ngx-order-pipe';

// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BuscadorComponent } from '../pages/vistas/buscador/buscador.component';

//Manage pages
import { ManageDirectorioComponent } from './manage/manage-directorio/manage-directorio.component';
import { ManageBlogComponent } from './manage/manage-blog/manage-blog.component';
import { ManageRevistaComponent } from './manage/manage-revista/manage-revista.component';
import { ManageGaleriaComponent } from './manage/manage-galeria/manage-galeria.component';
import { ManageDocumentosComponent } from './manage/manage-documentos/manage-documentos.component';
import { ManageBanncuadradoComponent } from './manage/manage-banncuadrado/manage-banncuadrado.component';
import { ManageBannhorizontalComponent } from './manage/manage-bannhorizontal/manage-bannhorizontal.component';
import { ManageBannverticalComponent } from './manage/manage-bannvertical/manage-bannvertical.component';
import { ManageContactosComponent } from './manage/manage-contactos/manage-contactos.component';
import { ManageUsuariosComponent } from './manage/manage-usuarios/manage-usuarios.component';
import { ManagePacientesComponent } from './manage/manage-pacientes/manage-pacientes.component';
import { ManageCongresopagosComponent } from './manage/manage-congresopagos/manage-congresopagos.component';
import { ManageFormacionComponent } from './manage/manage-formacion/manage-formacion.component';
import { ManageTrabajoscComponent } from './manage/manage-trabajosc/manage-trabajosc.component';
import { AfiliacionesComponent } from './manage/afiliaciones/afiliaciones.component';
import { NewsintagramComponent } from './manage/newsintagram/newsintagram.component';
import { ManageSliderComponent } from './manage/manage-slider/manage-slider.component';
import { ManageAliadosComponent } from './manage/manage-aliados/manage-aliados.component';
import { CeomanageComponent } from './manage/ceomanage/ceomanage.component';

//form pages
import { FormsBlogComponent } from './forms/forms-blog/forms-blog.component';
import { FormsDirectorioComponent } from './forms/forms-directorio/forms-directorio.component';
import { FormsRevistaComponent } from './forms/forms-revista/forms-revista.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';
import { FormsBanverticalComponent } from './forms/forms-banvertical/forms-banvertical.component';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';
import { FormsDocumentosComponent } from './forms/forms-documentos/forms-documentos.component';
import { FormsGaleriaComponent } from './forms/forms-galeria/forms-galeria.component';
import { FormsPacientesComponent } from './forms/forms-pacientes/forms-pacientes.component';
import { ViewCongresoComponent } from './vistas/vista-congreso/view-congreso.component';
import { ViewTrabajosComponent } from './vistas/vista-trabajos/view-trabajos.component';
import { FormsAfiliacionesComponent } from './forms/forms-afiliaciones/forms-afiliaciones.component';
import { FormsFormacionComponent } from './forms/forms-formacion/forms-formacion.component';
import { FormsUsersComponent } from './forms/forms-users/forms-users.component';
import { FormNewsintagramComponent } from './forms/form-newsintagram/form-newsintagram.component';
import { FormsAliadosComponent } from './forms/forms-aliados/forms-aliados.component';
import { CeoComponent } from './forms/ceo/ceo.component';


//slider
import { FormsSliderComponent } from './forms/forms-slider/forms-slider.component';
import { FotoceoComponent } from './forms/fotoceo/fotoceo.component';
import { FotoceomanageComponent } from './manage/fotoceomanage/fotoceomanage.component';
import { ConfiguracionComponent } from './forms/configuracion/configuracion.component';
import { ConfiguracionMComponent } from './manage/configuracion-m/configuracion-m.component';


import { QRCodeModule } from 'angular2-qrcode';
import { ManageDirregionalComponent } from './manage/manage-dirregional/manage-dirregional.component';
import { FormsDirregionalComponent } from './forms/forms-dirregional/forms-dirregional.component';


@NgModule({
  declarations: [
      PagesComponent,
      EscapeHtmlPipe,
      KeysPipe,
      DashboardComponent,
      AfiliacionesComponent,
      FormsAfiliacionesComponent,
      ManageDirectorioComponent,
      FormsDirectorioComponent,
      ManageBlogComponent,
      FormsBlogComponent,
      ManageRevistaComponent,
      FormsRevistaComponent,
      ManageGaleriaComponent,
      ManageDocumentosComponent,
      ManageBanncuadradoComponent,
      ManageBannhorizontalComponent,
      ManageBannverticalComponent,
      ManageContactosComponent,
      ManageUsuariosComponent,
      FormsBancuadradoComponent,
      FormsBanverticalComponent,
      FormsBanhorizontalComponent,
      FormsGaleriaComponent,
      FormsUsersComponent,
      FormsDocumentosComponent,
      FormsPacientesComponent,
      ManagePacientesComponent,
      ManageCongresopagosComponent,
      ViewCongresoComponent,
      ManageFormacionComponent,
      FormsFormacionComponent,
      ViewTrabajosComponent,
      ManageTrabajoscComponent,
      FormsSliderComponent,
      ManageSliderComponent,
      FormsAliadosComponent,
      ManageAliadosComponent,
      NewsintagramComponent,
      FormNewsintagramComponent,
      BuscadorComponent,
      CeoComponent,
      CeomanageComponent,
      FotoceoComponent,
      FotoceomanageComponent,
      ConfiguracionComponent,
      ConfiguracionMComponent,
      ManageDirregionalComponent,
      FormsDirregionalComponent

  ],
  exports: [
      PagesComponent,
      EscapeHtmlPipe,
      KeysPipe,
      NgxPaginationModule,
      CKEditorModule,
      DashboardComponent,
      AfiliacionesComponent,
      FormsAfiliacionesComponent,
      ManageDirectorioComponent,
      FormsDirectorioComponent,
      ManageBlogComponent,
      FormsBlogComponent,
      ManageRevistaComponent,
      FormsRevistaComponent,
      ManageGaleriaComponent,
      ManageDocumentosComponent,
      ManageBanncuadradoComponent,
      ManageBannhorizontalComponent,
      ManageBannverticalComponent,
      ManageContactosComponent,
      ManageUsuariosComponent,
      FormsBancuadradoComponent,
      FormsBanverticalComponent,
      FormsBanhorizontalComponent,
      FormsGaleriaComponent,
      FormsUsersComponent,
      FormsDocumentosComponent,
      FormsPacientesComponent,
      ManagePacientesComponent,
      ManageCongresopagosComponent,
      ViewCongresoComponent,
      ManageFormacionComponent,
      FormsFormacionComponent,
      ViewTrabajosComponent,
      ManageTrabajoscComponent,
      FormsSliderComponent,
      ManageSliderComponent,
      FormsAliadosComponent,
      ManageAliadosComponent,
      NewsintagramComponent,
      FormNewsintagramComponent,
      BuscadorComponent,
      CeoComponent,
      CeomanageComponent,
      FotoceoComponent,
      FotoceomanageComponent,
      ConfiguracionComponent,
      ConfiguracionMComponent



  ],
  imports: [
      CommonModule,
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ReactiveFormsModule,
      OrderModule,
      NgxPaginationModule,
      CKEditorModule,
      QRCodeModule


  ]
})
export class PagesModule { }
