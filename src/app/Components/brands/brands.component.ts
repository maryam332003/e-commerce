import { BrandCategories } from './../../Interfaces/brand';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Interfaces/products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  brandItem: Brand[] = [];
  ngOnInit(): void {
    this._ProductService.getAllBrands().subscribe({
      next: (response: BrandCategories) => {
        this.brandItem = response.data;
        console.log(this.brandItem);
      },
    });
  }
}
