import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {}
  errorMessage: string = '';
  loading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]{6,9}/),
    ]),
  });
  submitLogin(formData: FormGroup) {
    this.loading = true;
    console.log(formData.value);
    this._AuthenticationService.logIn(formData.value).subscribe({
      next: (data) => {
        if (data.message == 'success') {
          localStorage.setItem("token",data.token)
          this._Router.navigate(['/home']);
          this.loading = false;
          this._AuthenticationService.saveUserData(data);
        }
        console.log(data);
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
}
