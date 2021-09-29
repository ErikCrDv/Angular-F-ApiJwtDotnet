import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ClienteService } from '../cliente.service';
import { ClienteInterface } from '../Interfaces/ClienteInterface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['nombres', 'apellidos', 'direccion', 'Acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: ClienteService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    },
    (errorData) => {
      //alert("Usuario No Conectado")
      this.router.navigate(['/login']);
    });
  }

  actualizarCliente(cliente: ClienteInterface){
    console.log(cliente);

    this.dialog.open(ActualizarClienteComponent, {
      data: {
        nombres: cliente.nombres,
        apellidos: cliente.apellidos,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        id: cliente.id
      }
    });
  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

}
