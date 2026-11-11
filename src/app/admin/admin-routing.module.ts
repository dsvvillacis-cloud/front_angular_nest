import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'inventario/categoria', component: CategoriaComponent },
      // Puedes agregar aquí las demás rutas hijas cuando las crees
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }