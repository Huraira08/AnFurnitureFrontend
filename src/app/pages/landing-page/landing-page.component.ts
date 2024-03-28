import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  featureCardsData = [
    {
      title: 'Many Choices',
      description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
      imgPath: '../../../assets/images/many-choices.png'
    },
    {
      title: 'Fast and On Time',
      description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
      imgPath: '../../../assets/images/calendar.png'
    },
    {
      title: 'Affordable Price',
      description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
      imgPath: '../../../assets/images/affordable-price.png'
    }
  ]

  testimonialsData = [
    {
      customerName: "James Cooper",
      comment: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      iconImgPath: "../../../assets/images/quote-up.png",
      customerImgPath:"../../../assets/images/person1.jpg",
      rating: 4.3
    },
    {
      customerName: "Berry Gunawan",
      comment: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      iconImgPath: "../../../assets/images/quote-up.png",
      customerImgPath:"../../../assets/images/person2.jpg",
      rating: 3.9
    },
    {
      customerName: "Cobocannaeru",
      comment: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      iconImgPath: "../../../assets/images/quote-up.png",
      customerImgPath:"../../../assets/images/ellipse-person.png",
      rating: 3.9
    }
  ]

  articlesData = [
    {
      category: "Tips and Tricks",
      heading: "6 ways to give your home minimalistic vibes",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum.",
      authorName: "Jerremy Jean",
      avatarImgPath: "../../../assets/images/person1.jpg",
      articleImgPath: "../../../assets/images/article1.png"
    },
    {
      category: "Design Inspiration",
      heading: "How to make your interiors cooler and more stylish",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum.",
      authorName: "Michaela Augus",
      avatarImgPath: "../../../assets/images/person2.jpg",
      articleImgPath: "../../../assets/images/article2.png"
    },
    {
      category: "Tips and Tricks",
      heading: "Elements to add character to your space",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum.",
      authorName: "Kim Gurameh",
      avatarImgPath: "../../../assets/images/ellipse-person.png",
      articleImgPath: "../../../assets/images/article3.png"
    }
  ]

  products: Product[] = []

  constructor(private productsService: ProductsService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.productsService.productsSubject.subscribe({
      next: products=>{
        this.products = products;
        console.log(this.products);
      },
      error: err=>{
        console.log(err);
      }
    });
  }

  getCurrentDate(): string{
    const currentDate = new Date();
        return this.datePipe.transform(currentDate, 'EEEE, dd MMMM, yyyy') || '';
  }
}
