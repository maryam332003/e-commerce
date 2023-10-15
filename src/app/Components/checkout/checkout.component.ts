import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  id: string = '';
  errorMessage:string=''
  loading:boolean=false
  constructor(
    private _CartService: CartService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    _ActivatedRoute.params.subscribe((data: any) => {
      console.log(data);
      this.id = data.id;
    });
  }
  checkOutForm: FormGroup = new FormGroup({
    details: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0,1,2,3,5]{1}[0-9]{8}$/),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  sendPaymentData(formData: FormGroup) {
    this.loading = true;
    console.log(formData.value);
    this._CartService.checkPayment(this.id, formData.value).subscribe({
      next: (response) => {
        window.location.href = response.session.url;
        console.log(response.session.url);
        this.loading=false
      },
      error:(err)=>{
        this.errorMessage = err.error.message;
        this.loading=false
      }
    });
  }
}
