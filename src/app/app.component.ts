import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSmallScreen: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  navigateToLandingPage(){
    this.router.navigate(['/landing'])
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }
}
