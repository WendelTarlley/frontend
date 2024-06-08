import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./componentes/pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule),
    canActivate: [authGuard]
  },
  {
    path:"pagina-inicial",
    loadChildren: () => import('./componentes/pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule),
    canActivate: [authGuard]
  },
  {
    path:"login",
    loadChildren: () => import('./componentes/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
