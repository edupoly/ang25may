import { Injectable,signal } from '@angular/core';
// import products from './products/products.json'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allproducts = signal<any[]>([])
  constructor() { }

  getProductDetailsById(id:number){
    return this.allproducts().find((product)=>{
      return product.id==id
    })
  }
}
