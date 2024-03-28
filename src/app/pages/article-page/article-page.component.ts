import { Component } from '@angular/core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  articleCarouselData = [
    {
      imgPath: '../../../assets/images/article-carousel1.png'
    },
    {
      imgPath: '../../../assets/images/article-carousel2.jpg'
    },
    {
      imgPath: '../../../assets/images/article-carousel3.jpg'
    },
  ]

  trendingTopicsData = [
    {
      category: 'Tips and Trick',
      heading: 'Beautiful and Functional Home Terrace Decoration',
      description: "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
      articleImgPath: '../../../assets/images/trending1.png',
      avatarImgPath: '../../../assets/images/person2.jpg',
      authorName: 'Morgan Goldberg',
      date: 'Friday, 1 April 2022'
    },
    {
      category: 'Design Inspiration',
      heading: 'Modern Minimalist Home Design: Aesthetics of Modern Home Interiors',
      description: "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
      articleImgPath: '../../../assets/images/trending2.png',
      avatarImgPath: '../../../assets/images/person2.jpg',
      authorName: 'Rizal Ahmad',
      date: 'Wednesday, 17 March 2022'
    },
    {
      category: 'Color Guide',
      heading: '20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun',
      description: "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
      articleImgPath: '../../../assets/images/trending3.png',
      avatarImgPath: '../../../assets/images/person2.jpg',
      authorName: ' Filipus Pendi',
      date: 'Saturday, 29 February 2022'
    },
  ]
}
