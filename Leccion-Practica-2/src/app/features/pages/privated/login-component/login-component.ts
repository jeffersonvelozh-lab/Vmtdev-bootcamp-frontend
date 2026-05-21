import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../services/privated/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-component',
  imports: [MatCardModule, MatFormFieldModule, MatButtonModule,
    MatIconModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loading = signal(false);
  error = signal('');
  showPass = signal(false)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set('');

    const { email, password } = this.loginForm.value;

    this.authService.login({ email: email!, password: password! }).subscribe({
      next: () => {
        this.loading.set(false);
        this.snackBar.open('¡Bienvenido!', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/admin/dashboard']);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Usuario o contraseña incorrectos.');
      },
    });
  }

}
