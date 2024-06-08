import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { authGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component:PaginaInicialComponent
    },
];

export const PaginaInicialRoutes = RouterModule.forChild(routes);
