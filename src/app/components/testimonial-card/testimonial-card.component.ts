import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() customerName!: string
  @Input() comment!: string
  @Input() iconImgPath!: string
  @Input() customerImgPath!: string
  @Input() rating!: number
}
