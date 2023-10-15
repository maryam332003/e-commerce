import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {
    this.getAllProduct().subscribe({
      next: (data) => {
        this.changeCartCount(data.numOfCartItems);
      },
    });
  }
  BaseUrl: string = 'https://ecommerce.routemisr.com';
  dataHeader: any = {
    token: localStorage.getItem('token'),
  };
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject(0);
  changeCartCount(data: number) {
    this.cartQuantity.next(data);
  }
  addProductCart(id: string): Observable<any> {
    let body = { productId: id };
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/cart`, body, {
      headers: this.dataHeader,
    });
  }
  getAllProduct(): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/cart`, {
      headers: this.dataHeader,
    });
  }
  deleteCartProuct(id: string): Observable<any> {
    let body = { productId: id };
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/cart/${id}`, {
      headers: this.dataHeader,
    });
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/cart`, {
      headers: this.dataHeader,
    });
  }
  updateCartQuantity(id: string, count: number): Observable<any> {
    let body = { count: count };
    return this._HttpClient.put(`${this.BaseUrl}/api/v1/cart/${id}`, body, {
      headers: this.dataHeader,
    });
  }
  checkPayment(cartId: string, dataShipping: any): Observable<any> {
    let body = { shippingAddress: dataShipping };
    return this._HttpClient.post(
      `${this.BaseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      body,
      {
        headers: this.dataHeader,
      }
    );
  }
}
