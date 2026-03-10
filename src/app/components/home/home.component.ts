import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  texts = ['let\'\s Bond','Welcome to Our Site', 'Your Success, Our Commitment'];
  chars: string[] = [];
  out = false;
  index = 0;

  ngOnInit() {
    this.setText();

    setInterval(() => {
      this.animateOut();
    }, 5000);
  }

  setText() {
    this.chars = this.texts[this.index].split('');
    this.index = (this.index + 1) % this.texts.length;
    this.out = false;
  }

  animateOut() {
    this.out = true;

    setTimeout(() => {
      this.setText();
    }, 500); // must match charFlyOut duration
  }

  
}
