import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
