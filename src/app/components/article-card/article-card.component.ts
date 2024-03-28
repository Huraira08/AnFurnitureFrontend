import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  @Input() category!: string
  @Input() heading!: string
  @Input() description!: string
  @Input() articleImgPath!: string
  @Input() avatarImgPath!: string
  @Input() authorName!: string
  @Input() date!: string
  @Input() hasMaxWidth = false;

  truncate(text: string){
    return text.substring(0, 29) + '...';
  }
}
