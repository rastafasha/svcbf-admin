import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';






@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NopagefoundComponent,
        ModalComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NopagefoundComponent,
        ModalComponent
    ]
})

export class SharedModule { }
