import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart=signal<any[]>([])

  addProductToCart(product:any){
    this.cart.update(cart=>[...cart,product])
  }

  constructor() { }
}
