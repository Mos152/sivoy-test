import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    // Simulando el proceso de inicio de sesión exitoso
    this.authService.login();
    // Redirigir a la página home después de iniciar sesión
    this.router.navigate(['/layout']);
  }



}
