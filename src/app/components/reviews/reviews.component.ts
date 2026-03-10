import { CommonModule } from '@angular/common';
import { Testmonial } from '../../core/models/testmonial';
import { TestmonialService } from './../../core/services/testmonial.service';
import { Component, inject, OnInit } from '@angular/core';
import { TrancatePipe } from '../../core/pipes/trancate.pipe';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule,TrancatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {

  reviews :Testmonial[] = [];

  testmonialService:TestmonialService = inject(TestmonialService);

  ngOnInit(): void {

    this.getReviews();

  }

  getReviews(){
    this.testmonialService.getReviews().subscribe((res)=>{
      this.reviews = res.slice(0, 4);
      console.log(this.reviews);
    })
  }
}
