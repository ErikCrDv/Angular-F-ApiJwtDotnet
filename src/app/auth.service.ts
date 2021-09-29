import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './Interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:44339/api/Users/';

  constructor(private http: HttpClient,
              private router: Router) { }

  register(user: UserInterface){
    return this.http.post(this.baseUrl+'Register', user);
  }

  login(user: UserInterface){
    return this.http.post(this.baseUrl+'Login', user);
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['/clientes']);
    window.location.reload();
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }
}
