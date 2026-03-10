import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Testmonial } from '../models/testmonial';

@Injectable({
  providedIn: 'root'
})
export class TestmonialService {

  http:HttpClient=inject(HttpClient);

  constructor() { }

  getReviews(){
    return this.http.get<Testmonial[]>('https://testimonialapi.vercel.app/api');
  }

}
