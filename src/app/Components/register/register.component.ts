import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {}

  errorMessage: string = '';
  loading: boolean = false;
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]{6,9}/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]{6,9}/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[01235][0-9]{8}/),
      ]),
    },
    { validators: this.repassMatch }
  );
  submitRegisteration(formData: FormGroup) {
    this.loading = true;
    console.log(formData.value);
    this._AuthenticationService.register(formData.value).subscribe({
      next: (data) => {
        if (data.message == 'success') {
          this._Router.navigate(['/login']);
          this.loading = false;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  repassMatch(form: any) {
    let password = form.get('password');
    let rePassword = form.get('rePassword');
    if (password?.value == rePassword?.value) {
      return null;
    } else {
      rePassword?.setErrors({ rePassword: 'rePassword not matched Password' });
      return { rePassword: 'rePassword not matched Password' };
    }
  }
}
