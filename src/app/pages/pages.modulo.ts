import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.modulo';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfiliacionesComponent } from './manage/afiliaciones/afiliaciones.component';

import { FormsAfiliacionesComponent } from './forms/forms-afiliaciones/forms-afiliaciones.component';

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


//form pages
import { FormsBlogComponent } from './forms/forms-blog/forms-blog.component';
import { FormsDirectorioComponent } from './forms/forms-directorio/forms-directorio.component';
import { FormsRevistaComponent } from './forms/forms-revista/forms-revista.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';
import { FormsBanverticalComponent } from './forms/forms-banvertical/forms-banvertical.component';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';

import { FormsGaleriaComponent } from './forms/forms-galeria/forms-galeria.component';

import { FormsUsersComponent } from './forms/forms-users/forms-users.component';


// pipe
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import {KeysPipe} from '../pipes/keys.pipe';
import { OrderModule } from 'ngx-order-pipe';

// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

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
        FormsUsersComponent
        
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
        FormsUsersComponent

        
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        OrderModule,
        NgxPaginationModule,
        CKEditorModule
        
        
    ]
})

export class PagesModule {}
