import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imgPath!: string;
  @Input() price!: number;
  @Input() category!: string;
}
