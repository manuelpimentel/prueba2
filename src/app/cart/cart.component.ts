import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import {ApiService} from '../api.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  courses: any;
  details: any;

  keys(){
    return Object.keys(this.courses);
  }
  
  constructor( private ApiService : ApiService) { 

    this.ApiService.getCourses().subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
        console.log(err);
    });
    
  }


}
