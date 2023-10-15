import { Data } from 'src/app/Interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CartData, cartItem } from 'src/app/Interfaces/cart';
import { CartService } from 'src/app/Services/cart.service';
declare let Swal:any
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
        this._CartService.changeCartCount(response.numOfCartItems);
        console.log(response);
        this.cartData = response;
      },
      error: () => {},
      complete: () => {},
    });
  }
  clearCartProducts() {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        if (response.message == 'success') {
          this.cartData = null;
        }
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }
  updateQuantity(id: string, count: number) {
    if (count > 0) {
      this._CartService.updateCartQuantity(id, count).subscribe({
        next: (response) => {
          console.log(response);
          this.cartData = response;
        },
        error: () => {},
        complete: () => {},
      });
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Quantity Must Be Greater Than 1',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
