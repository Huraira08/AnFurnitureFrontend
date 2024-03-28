import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-service-card',
  templateUrl: './customer-service-card.component.html',
  styleUrls: ['./customer-service-card.component.css']
})
export class CustomerServiceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imgPath!: string;
}
