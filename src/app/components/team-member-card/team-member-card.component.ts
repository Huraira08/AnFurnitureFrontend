import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css']
})
export class TeamMemberCardComponent {
  @Input() name!: string;
  @Input() jobTitle!: string;
  @Input() imgPath!: string;
}
