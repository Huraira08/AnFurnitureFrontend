import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent {
  teamMembersData = [
    {
      name:'Jesse Depp',
      jobTitle: 'Founder and CEO',
      imgPath: '../../../assets/images/team-member1.png'
    },
    {
      name:'Miguel Carter',
      jobTitle: 'COO',
      imgPath: '../../../assets/images/team-member2.png'
    },
    {
      name:'Andrew Taggart',
      jobTitle: 'Developer',
      imgPath: '../../../assets/images/team-member3.png'
    },
    {
      name:'Garret Sales',
      jobTitle: 'Manager',
      imgPath: '../../../assets/images/team-member4.png'
    },
    {
      name:'Jake Von',
      jobTitle: 'Senior Designer',
      imgPath: '../../../assets/images/team-member1.png'
    },
    {
      name:'George Taggart',
      jobTitle: 'Marketer',
      imgPath: '../../../assets/images/team-member2.png'
    },
  ]
}
