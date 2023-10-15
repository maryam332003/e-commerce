import { Product, Products } from '../../Interfaces/products';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
declare let Swal :any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService
  ) {}
  addCart(id: any) {
    this._CartService.addProductCart(id).subscribe({
      next: (data) => {
        console.log('added to cart', data);
        if(data.status=='success'){
          this._CartService.changeCartCount(data.numOfCartItems)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added successfully to your cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      },
      error: (err) => console.log('Error:', err),
      complete: () => {},
    });
  }
  productList: Product[] = [];
  ngOnInit(): void {
    this._ProductService.getAllProducts().subscribe({
      next: (req: Products) => {
        console.log(req.data);
        this.productList = req.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
