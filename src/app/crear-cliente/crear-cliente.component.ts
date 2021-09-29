import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  constructor(private service: ClienteService, 
              private router: Router) { }

  clienteForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.clienteForm.value);

    this.service.crearCliente(this.clienteForm.value).subscribe((data: any) => {
      alert('Cliente creado');
      this.router.navigate(['/clientes']);
    });

  }
}
