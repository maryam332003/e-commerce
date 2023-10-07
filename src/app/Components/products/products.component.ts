import { Product, Products } from '../../Interfaces/products';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _ProductService: ProductService) {}
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
