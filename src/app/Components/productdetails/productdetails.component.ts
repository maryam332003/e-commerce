import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails, productInfo } from 'src/app/Interfaces/productdetails';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
declare let Swal: any;
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  productDetail: productInfo | null = null;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _CartService: CartService
  ) {
    _ActivatedRoute.params.subscribe((data: any) => {
      let productId = data['id'];
      console.log(data['id']);
      _ProductService.getProductDetails(productId).subscribe({
        next: (response: ProductDetails) => {
          this.productDetail = response.data;
          console.log(this.productDetail);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    });
  }
  addItemToCart(id: any) {
    this._CartService.addProductCart(id).subscribe({
      next: (data) => {
        this._CartService.changeCartCount(data.numOfCartItems);
        console.log('added to cart', data);
        if (data.status == 'success') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added successfully to your cart',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      error: (err) => console.log('Error:', err),
      complete: () => {},
    });
  }
}
