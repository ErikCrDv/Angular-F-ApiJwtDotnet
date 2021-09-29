import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ClienteService } from './cliente.service';
import { AuthService } from './auth.service';

import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';
import { MatListModule } from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    DeleteClienteComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule
  ],
  entryComponents: [ActualizarClienteComponent],
  providers: [ClienteService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
