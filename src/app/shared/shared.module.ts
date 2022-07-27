import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
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
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }
