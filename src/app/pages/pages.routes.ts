import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfiliacionesComponent } from './manage/afiliaciones/afiliaciones.component';
import { FormsAfiliacionesComponent } from './forms/forms-afiliaciones/forms-afiliaciones.component';

import {ManageDirectorioComponent} from './manage/manage-directorio/manage-directorio.component';
import { FormsDirectorioComponent } from './forms/forms-directorio/forms-directorio.component';

import { FormsBlogComponent } from './forms/forms-blog/forms-blog.component';
import { ManageBlogComponent } from './manage/manage-blog/manage-blog.component';

import { ManageRevistaComponent } from './manage/manage-revista/manage-revista.component';
import { FormsRevistaComponent } from './forms/forms-revista/forms-revista.component';

import { ManageGaleriaComponent } from './manage/manage-galeria/manage-galeria.component';
import { FormsGaleriaComponent } from './forms/forms-galeria/forms-galeria.component';

import { ManageDocumentosComponent } from './manage/manage-documentos/manage-documentos.component';
import { FormsDocumentosComponent } from './forms/forms-documentos/forms-documentos.component';

import { ManageBanncuadradoComponent } from './manage/manage-banncuadrado/manage-banncuadrado.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';

import { ManageBannhorizontalComponent } from './manage/manage-bannhorizontal/manage-bannhorizontal.component';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';

import { ManageBannverticalComponent } from './manage/manage-bannvertical/manage-bannvertical.component';
import { FormsBanverticalComponent } from './forms/forms-banvertical/forms-banvertical.component';

import { ManageContactosComponent } from './manage/manage-contactos/manage-contactos.component';

import { ManageUsuariosComponent } from './manage/manage-usuarios/manage-usuarios.component';
import { FormsUsersComponent } from './forms/forms-users/forms-users.component';


import { FormsPacientesComponent } from './forms/forms-pacientes/forms-pacientes.component';
import { ManagePacientesComponent } from './manage/manage-pacientes/manage-pacientes.component';
import { ManageCongresopagosComponent } from './manage/manage-congresopagos/manage-congresopagos.component';
import { ViewCongresoComponent } from './vistas/vista-congreso/view-congreso.component';

import { ManageFormacionComponent } from './manage/manage-formacion/manage-formacion.component';
import { FormsFormacionComponent } from './forms/forms-formacion/forms-formacion.component';
import { ManageTrabajoscComponent } from './manage/manage-trabajosc/manage-trabajosc.component';
import { ViewTrabajosComponent } from './vistas/vista-trabajos/view-trabajos.component';
import { ManageSliderComponent } from './manage/manage-slider/manage-slider.component';
import { FormsSliderComponent } from './forms/forms-slider/forms-slider.component';
import { ManageAliadosComponent } from './manage/manage-aliados/manage-aliados.component';
import { FormsAliadosComponent } from './forms/forms-aliados/forms-aliados.component';
import { NewsintagramComponent } from './manage/newsintagram/newsintagram.component';
import { FormNewsintagramComponent } from './forms/form-newsintagram/form-newsintagram.component';
import { BuscadorComponent } from './vistas/buscador/buscador.component';
import { CeoComponent } from './forms/ceo/ceo.component';
import { CeomanageComponent } from './manage/ceomanage/ceomanage.component';
import { FotoceoComponent } from './forms/fotoceo/fotoceo.component';
import { FotoceomanageComponent } from './manage/fotoceomanage/fotoceomanage.component';
import { ConfiguracionComponent } from './forms/configuracion/configuracion.component';
import { ConfiguracionMComponent } from './manage/configuracion-m/configuracion-m.component';
import { ManageDirregionalComponent } from './manage/manage-dirregional/manage-dirregional.component';
import { FormsDirregionalComponent } from './forms/forms-dirregional/forms-dirregional.component';


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

            { path: 'configuracion', canActivate: [AuthGuard],component: ConfiguracionMComponent },
            { path: 'configuracion/create', canActivate: [AuthGuard],component: ConfiguracionComponent },
            { path: 'configuracion/edit/:id', canActivate: [AuthGuard],component: ConfiguracionComponent },

            { path: 'ceo', canActivate: [AuthGuard],component: CeomanageComponent },
            { path: 'ceo/create', canActivate: [AuthGuard],component: CeoComponent },
            { path: 'ceo/edit/:id', canActivate: [AuthGuard],component: CeoComponent },

            { path: 'fotoceo', canActivate: [AuthGuard],component: FotoceomanageComponent },
            { path: 'fotoceo/create', canActivate: [AuthGuard],component: FotoceoComponent },
            { path: 'fotoceo/edit/:id', canActivate: [AuthGuard],component: FotoceoComponent },


            { path: 'directorio', canActivate: [AuthGuard], component: ManageDirectorioComponent},
            { path: 'directorio/create',canActivate: [AuthGuard], component: FormsDirectorioComponent },
            { path: 'directorio/buscar',canActivate: [AuthGuard], component: BuscadorComponent },
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
            { path: 'documento/create', canActivate: [AuthGuard],component: FormsDocumentosComponent },
            { path: 'documento/edit/:id', canActivate: [AuthGuard],component: FormsDocumentosComponent },

            { path: 'banner-cuadrado', canActivate: [AuthGuard],component: ManageBanncuadradoComponent },
            { path: 'banner-cuadrado/create', canActivate: [AuthGuard],component: FormsBancuadradoComponent },
            { path: 'banner-cuadrado/edit/:id', canActivate: [AuthGuard],component: FormsBancuadradoComponent },

            { path: 'banner-horizontal', canActivate: [AuthGuard],component: ManageBannhorizontalComponent },
            { path: 'banner-horizontal/create', canActivate: [AuthGuard],component: FormsBanhorizontalComponent },
            { path: 'banner-horizontal/edit/:id', canActivate: [AuthGuard],component: FormsBanhorizontalComponent },

            { path: 'banner-vertical', canActivate: [AuthGuard],component: ManageBannverticalComponent },
            { path: 'banner-vertical/create', canActivate: [AuthGuard],component: FormsBanverticalComponent },
            { path: 'banner-vertical/edit/:id', canActivate: [AuthGuard],component: FormsBanverticalComponent },

            { path: 'pacientes', canActivate: [AuthGuard],component: ManagePacientesComponent },
            { path: 'pacientes/create', canActivate: [AuthGuard],component: FormsPacientesComponent },
            { path: 'pacientes/edit/:id', canActivate: [AuthGuard],component: FormsPacientesComponent },

            { path: 'dirregional', canActivate: [AuthGuard],component: ManageDirregionalComponent },
            { path: 'dirregional/create', canActivate: [AuthGuard],component: FormsDirregionalComponent },
            { path: 'dirregional/edit/:id', canActivate: [AuthGuard],component: FormsDirregionalComponent },

            { path: 'usuarios', canActivate: [AuthGuard],component: ManageUsuariosComponent },
            { path: 'usuario/create', canActivate: [AuthGuard],component: FormsUsersComponent },
            { path: 'usuario/edit/:id', canActivate: [AuthGuard],component: FormsUsersComponent },

            { path: 'contactos', canActivate: [AuthGuard],component: ManageContactosComponent },

            { path: 'congreso', canActivate: [AuthGuard],component: ManageCongresopagosComponent },
            { path: 'congreso/view/:id', canActivate: [AuthGuard],component: ViewCongresoComponent },

            { path: 'trabajos', canActivate: [AuthGuard],component: ManageTrabajoscComponent },
            { path: 'trabajos/view/:id', canActivate: [AuthGuard],component: ViewTrabajosComponent },

            { path: 'slider', canActivate: [AuthGuard],component: ManageSliderComponent },
            { path: 'slider/create', canActivate: [AuthGuard],component: FormsSliderComponent },
            { path: 'slider/edit/:id', canActivate: [AuthGuard],component: FormsSliderComponent },

            { path: 'aliados', canActivate: [AuthGuard],component: ManageAliadosComponent },
            { path: 'aliados/create', canActivate: [AuthGuard],component: FormsAliadosComponent },
            { path: 'aliados/edit/:id', canActivate: [AuthGuard],component: FormsAliadosComponent },

            { path: 'news-instagram', canActivate: [AuthGuard],component: NewsintagramComponent },
            { path: 'news-instagram/create', canActivate: [AuthGuard],component: FormNewsintagramComponent },
            { path: 'news-instagram/edit/:id', canActivate: [AuthGuard],component: FormNewsintagramComponent },

            { path: 'formacion', canActivate: [AuthGuard],component: ManageFormacionComponent },
            { path: 'formacion/create', canActivate: [AuthGuard],component: FormsFormacionComponent },
            { path: 'formacion/edit/:id', canActivate: [AuthGuard],component: FormsFormacionComponent },

            { path: '', redirectTo: '/admin', pathMatch: 'full'},
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
