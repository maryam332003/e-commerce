import { Component } from '@angular/core';
import { Categories, Data } from 'src/app/Interfaces/category';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private _ProductService: ProductService) {}
  categoryList :Data[]=[]
  getAllCtegories() {
    this._ProductService.getAllCategories().subscribe({
      next: (req: Categories) => {
        console.log(req.data);
        this.categoryList = req.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},

    });
  }
}
