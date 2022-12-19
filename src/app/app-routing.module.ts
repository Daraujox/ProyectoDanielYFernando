import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './modules/create-producto/create-producto.component';
import { CreateReservaComponent } from './modules/create-reserva/create-reserva.component';
import { HomeComponent } from './modules/home/home.component';
import { ListProductosComponent } from './modules/list-productos/list-productos.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ReservasComponent } from './modules/reservas/reservas.component';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'home', component:HomeComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'reservas', component:ReservasComponent},
  {path: 'createreserva', component:CreateReservaComponent},
  {path: 'listarproductos', component:ListProductosComponent},
  {path: 'createproducto', component:CreateProductoComponent},
  {path: 'editarproducto/:id', component:CreateProductoComponent},
  {path: 'editarreserva/:id', component:CreateReservaComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }