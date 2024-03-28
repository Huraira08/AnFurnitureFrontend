import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  productsSubject = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) { 
    this.fetchAllProducts();
  }

  fetchAllProducts(){
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      next: products=>{
        this.products = products;
        this.productsSubject.next(products)
      },
      error: err=>{
        console.log(err);
      }
    })
  }
}
