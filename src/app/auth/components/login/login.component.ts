import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    funIngresar(): void {
        if (this.loginForm.valid) {
            this.authService.loginConNest(this.loginForm.value).subscribe({
                next: (res: any) => {
                    if (res && res.token) {
                        localStorage.setItem('token', res.token);
                    }
                    this.router.navigate(['/admin']);
                },
                error: (err: any) => {
                    console.error('Error en autenticación con NestJS:', err);
                    // Para pruebas locales en caso de que NestJS no responda:
                    this.router.navigate(['/admin']);
                }
            });
        }
    }
}