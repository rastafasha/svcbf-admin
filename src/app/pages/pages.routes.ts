import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfiliacionesComponent } from './manage/afiliaciones/afiliaciones.component';
import {ManageDirectorioComponent} from './manage/manage-directorio/manage-directorio.component';
import { FormsDirectorioComponent } from './forms/forms-directorio/forms-directorio.component';
import { ManageBlogComponent } from './manage/manage-blog/manage-blog.component';
import { ManageRevistaComponent } from './manage/manage-revista/manage-revista.component';
import { FormsBlogComponent } from './forms/forms-blog/forms-blog.component';
import { FormsRevistaComponent } from './forms/forms-revista/forms-revista.component';
import { ManageGaleriaComponent } from './manage/manage-galeria/manage-galeria.component';
import { ManageDocumentosComponent } from './manage/manage-documentos/manage-documentos.component';
import { ManageBanncuadradoComponent } from './manage/manage-banncuadrado/manage-banncuadrado.component';
import { ManageBannhorizontalComponent } from './manage/manage-bannhorizontal/manage-bannhorizontal.component';
import { ManageBannverticalComponent } from './manage/manage-bannvertical/manage-bannvertical.component';
import { ManageContactosComponent } from './manage/manage-contactos/manage-contactos.component';
import { ManageUsuariosComponent } from './manage/manage-usuarios/manage-usuarios.component';
import { FormsBanverticalComponent } from './forms/forms-banvertical/forms-banvertical.component';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';
import { FormsGaleriaComponent } from './forms/forms-galeria/forms-galeria.component';
import { FormsUsersComponent } from './forms/forms-users/forms-users.component';
import { FormsAfiliacionesComponent } from './forms/forms-afiliaciones/forms-afiliaciones.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard],
        children: [
            { 
                path: 'admin', 
                component: DashboardComponent,
                canActivate: [ AuthGuard],
                data: { titulo: 'Dashboard', } 
            },
            { path: 'afiliaciones',canActivate: [AuthGuard], component: AfiliacionesComponent},
            { path: 'afiliaciones/create',canActivate: [AuthGuard], component: FormsAfiliacionesComponent},
            { path: 'afiliaciones/edit/:id',canActivate: [AuthGuard], component: FormsAfiliacionesComponent},
            { path: 'directorio', canActivate: [AuthGuard], component: ManageDirectorioComponent},
            { path: 'directorio/create',canActivate: [AuthGuard], component: FormsDirectorioComponent },
            { path: 'directorio/edit/:id',canActivate: [AuthGuard], component: FormsDirectorioComponent },
            { path: 'blog', canActivate: [AuthGuard],component: ManageBlogComponent },
            { path: 'blog/create', canActivate: [AuthGuard],component: FormsBlogComponent },
            { path: 'blog/edit/:id', canActivate: [AuthGuard],component: FormsBlogComponent },
            { path: 'revista', canActivate: [AuthGuard],component: ManageRevistaComponent },
            { path: 'revista/create', canActivate: [AuthGuard],component: FormsRevistaComponent },
            { path: 'revista/edit/:id', canActivate: [AuthGuard],component: FormsRevistaComponent },
            { path: 'galeria', canActivate: [AuthGuard],component: ManageGaleriaComponent },
            { path: 'galeria/create', canActivate: [AuthGuard],component: FormsGaleriaComponent },
            { path: 'galeria/edit/:id', canActivate: [AuthGuard],component: FormsGaleriaComponent },
            { path: 'documentos', canActivate: [AuthGuard],component: ManageDocumentosComponent },
            { path: 'banner-cuadrado', canActivate: [AuthGuard],component: ManageBanncuadradoComponent },
            { path: 'banner-cuadrado/create', canActivate: [AuthGuard],component: FormsBancuadradoComponent },
            { path: 'banner-cuadrado/edit/:id', canActivate: [AuthGuard],component: FormsBancuadradoComponent },
            { path: 'banner-horizontal', canActivate: [AuthGuard],component: ManageBannhorizontalComponent },
            { path: 'banner-horizontal/create', canActivate: [AuthGuard],component: FormsBanhorizontalComponent },
            { path: 'banner-horizontal/edit/:id', canActivate: [AuthGuard],component: FormsBanhorizontalComponent },
            { path: 'banner-vertical', canActivate: [AuthGuard],component: ManageBannverticalComponent },
            { path: 'banner-vertical/create', canActivate: [AuthGuard],component: FormsBanverticalComponent },
            { path: 'banner-vertical/edit/:id', canActivate: [AuthGuard],component: FormsBanverticalComponent },
            { path: 'contactos', canActivate: [AuthGuard],component: ManageContactosComponent },
            { path: 'usuarios', canActivate: [AuthGuard],component: ManageUsuariosComponent },
            { path: 'usuario/create', canActivate: [AuthGuard],component: FormsUsersComponent },
            { path: 'usuario/edit/:id', canActivate: [AuthGuard],component: FormsUsersComponent },
            
            { path: '', redirectTo: '/admin', pathMatch: 'full'},
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
