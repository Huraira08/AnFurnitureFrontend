import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit{
  offersData = [
    {
      buttonText: 'Discount',
      offerTitle:'Ramadhan Sale Offer',
      offerDetail:'Get 40% off for the first transaction on An Furniute',
      imgPath:'../../../assets/images/offer1.png'
    },
    {
      buttonText: 'Discount',
      offerTitle:'Winter Sale Offer',
      offerDetail:'Get 25% off for the first transaction on An Furniute',
      imgPath:'../../../assets/images/offer2.jpg'
    },
    {
      buttonText: 'Discount',
      offerTitle:'Summer Sale Offer',
      offerDetail:'Get 30% off for the first transaction on An Furniute',
      imgPath:'../../../assets/images/offer3.jpg'
    }
  ]
  products: Product[] = []

  currentPage = 1;
  totalProducts = 0;
  pageSize = 6;
  productsOnPage: Product[] = [];

  @ViewChild('productsContainer') productsContainer!: ElementRef;

  constructor(private productsService: ProductsService){}
  ngOnInit(): void {
    this.productsService.productsSubject.subscribe({
      next: products=>{
        this.products = products;
        this.totalProducts = this.products.length
        this.loadProducts();
      },
      error:error=>{
        console.log(error);
      }
    })
  }

  loadProducts(){
    let startIndex = (this.currentPage - 1) * this.pageSize
    console.log("Starting index is: " + startIndex);
    this.productsOnPage = this.products.slice(startIndex, startIndex + this.pageSize);
    
    if(this.productsContainer){
      this.productsContainer.nativeElement.scrollTop = 0;
    }
  }

  onPageIndexChange(index: number){
    this.currentPage = index;
    this.loadProducts();
  }
}
