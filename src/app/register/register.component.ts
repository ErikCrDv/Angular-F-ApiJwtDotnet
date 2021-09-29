import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private router: Router) { 
    this.registerForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.register(this.registerForm.value).subscribe((data: any) => {
      localStorage.setItem('userName', data.result.userName);
      localStorage.setItem('token_value', data.result.token);
      alert(data.displayMessage);
      this.router.navigate(['/clientes']);
    });
  }

}
