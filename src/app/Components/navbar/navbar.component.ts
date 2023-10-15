import { CartService } from 'src/app/Services/cart.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _CartService: CartService
  ) {
    _CartService.cartQuantity.subscribe((data) => {
      this.count = data;
    });
  }
  isLogin: any = null;
  count: number = 0;
  ngOnInit(): void {
    this._AuthenticationService.userData.subscribe({
      next: (data) => {
        console.log(data);
        this.isLogin = this._AuthenticationService.userData.getValue();
        console.log(this.isLogin);
      },
      error: () => {},
      complete: () => {},
    });
  }
  logOut() {
    this._AuthenticationService.logOut();
  }
}
