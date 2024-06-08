import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { PaginaInicialRoutes } from './pagina-inicial.routing';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    PaginaInicialRoutes,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule

  ],
  declarations: [PaginaInicialComponent]
})
export class PaginaInicialModule { }
