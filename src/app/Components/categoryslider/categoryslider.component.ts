import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.css'],
})
export class CategorysliderComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  categorySlider: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
  };
  ngOnInit(): void {
    this._ProductService.getProductCategories().subscribe({
      next: (resp) => {
        this.categorySlider = resp.data;
        console.log(this.categorySlider);
      },
    });
  }
}
