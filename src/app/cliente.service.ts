import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteInterface } from './Interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = 'https://localhost:44339/api/Clientes/';

  constructor(private http: HttpClient) { }

  isThereToken(){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return headers;
  }

  getClientes(){
    return this.http.get(this.baseUrl, {headers: this.isThereToken()});
  }

  getCliente(id: number){
    return this.http.get(this.baseUrl+id, {headers: this.isThereToken()});
  }

  crearCliente(cliente: ClienteInterface){
    return this.http.post(this.baseUrl, cliente, {headers: this.isThereToken()});
  }

  actualizarCliente(id: number, cliente: ClienteInterface){
    return this.http.put(this.baseUrl+id, cliente, {headers: this.isThereToken()});
  }

  deleteCliente(id: number){
    return this.http.delete(this.baseUrl+id, {headers: this.isThereToken()});
  }
}
