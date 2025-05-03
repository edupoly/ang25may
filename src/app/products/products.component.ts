import { Component, signal } from '@angular/core';
import products  from './products.json'
import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [NgFor,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  allproducts = signal<any[]>([...products])
  constructor(public cS:CartService){

  }
  addToCart(p:any){
    this.cS.addProductToCart(p)
  }
}
