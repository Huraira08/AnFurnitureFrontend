import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.css']
})
export class ProductOfferComponent {
  @Input() buttonText!: string;
  @Input() offerTitle!: string;
  @Input() offerDetail!: string;
  @Input() imgPath!: string;
}
