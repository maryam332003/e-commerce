import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}
  BaseUrl: string = 'https://ecommerce.routemisr.com';
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/products`);
  }
  getProductDetails(id: string): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/products/${id}`);
  }
  getProductCategories(): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/categories`);
  }
  getAllBrands(): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/brands`);
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/categories`);
  }


}
