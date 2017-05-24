import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  courses: any;
  details: any;

  keys(){
    return Object.keys(this.courses);
  }
  
  constructor( private CartService : CartService) { }

  ngOnInit() {
    this.courses = this.CartService.getCourses();
    this.details = this.CartService.getDetail();
  }

}
