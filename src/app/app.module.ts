import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ReservasComponent } from './modules/reservas/reservas.component';
import { CreateReservaComponent } from './modules/create-reserva/create-reserva.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductosComponent } from './modules/list-productos/list-productos.component';
import { CreateProductoComponent } from './modules/create-producto/create-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    ReservasComponent,
    CreateReservaComponent,
    ListProductosComponent,
    CreateProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
