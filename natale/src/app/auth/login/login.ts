import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Login avvenuto con successo
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Errore durante il login:', error);
        alert('Login fallito: ' + error.message);
      });
  }
}