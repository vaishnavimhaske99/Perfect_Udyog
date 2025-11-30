import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  slides = [
    { img: 'assets/banner.jpeg', caption: 'Caption One' },
    { img: 'assets/offer.png', caption: 'Caption Two' },
    { img: 'assets/key.jpeg', caption: 'Caption Three' }
  ];

  currentSlideIndex = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 3000); // Change slide every 3 seconds
  }

}
