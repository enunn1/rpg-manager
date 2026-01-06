import { Component } from '@angular/core';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
   email = '';
  displayName = '';
  password = '';
  error?: string;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.auth.register(this.email, this.displayName, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => (this.error = 'Registration failed'),
    });
  }
}
