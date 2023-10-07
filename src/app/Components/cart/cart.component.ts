import { Data } from './../../Interfaces/cart';
import { Component, OnInit } from '@angular/core';
import { CartData } from 'src/app/Interfaces/cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  cartData: CartData | null = null;

  ngOnInit(): void {
    this._CartService.getAllProduct().subscribe({
      next: (response) => {
        console.log(response);
        this.cartData = response;
      },
      error: () => {},
      complete: () => {},
    });
  }
  deleteProduct(id: string) {
    this._CartService.deleteCartProuct(id).subscribe({
      next: (response) => {
        console.log(response);
        this.cartData = response;
      },
      error: () => {},
      complete: () => {},
    });
  }
  clearCart(){
    this.cartData=null
  }
}
