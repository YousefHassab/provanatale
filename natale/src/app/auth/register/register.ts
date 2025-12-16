import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password)
      .then(() => {
        // Registrazione avvenuta con successo
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Errore durante la registrazione:', error);
        alert('Registrazione fallita: ' + error.message);
      });
  }
}