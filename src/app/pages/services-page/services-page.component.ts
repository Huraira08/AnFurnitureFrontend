import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  servicesData = [
    {
      title: 'Furniture',
      description: "At the ultimate smart home, you're met with technology before you even step through the front door."
    },
    {
      title: 'Home Decoration',
      description: "Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings."
    },
    {
      title: 'Kitchen Cabinet',
      description: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. "
    },
    {
      title: 'Interior Design',
      description: "Innovative products often feature innovative designs that play with the patterns we are familiar."
    },
    {
      title: 'Exterior Design',
      description: "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces."
    },
    {
      title: 'Custom Furniture',
      description: "With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs."
    },
  ]

  addLeadingZero(index: number): string{
    return index < 10 ? '0' + index : index.toString()
  }
}
