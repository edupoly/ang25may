import { Component,signal } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product=signal<any>({})
  constructor(public pS:ProductService,public aR:ActivatedRoute){
    this.aR.params.subscribe((x)=>{
      this.product.set(this.pS.getProductDetailsById(x['id']));
    })
  }

}
