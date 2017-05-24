import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../common/course'
import { CartService } from '../cart.service'

@Component({
  selector: 'coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css']
})
export class CourseboxComponent implements OnInit {
  @Input()
  course: Course;

  constructor( private CartService : CartService) 
  { }

  add(course : Course){
    this.CartService.addToCart(course);
  }

  ngOnInit() {
  }

}
