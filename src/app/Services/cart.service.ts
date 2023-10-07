import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  BaseUrl: string = 'https://ecommerce.routemisr.com';
  dataHeader: any = {
    token: localStorage.getItem('token'),
  };
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

}
