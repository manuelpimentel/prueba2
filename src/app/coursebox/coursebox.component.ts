import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../common/course'
import { OportunityService } from '../oportunity.service'

@Component({
  selector: 'coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css']
})
export class CourseboxComponent implements OnInit {
  @Input()
  course: Course;

  constructor( private OportunityService : OportunityService) 
  { }

  add(){
    this.OportunityService.makeGet().subscribe((res:any)=>{
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
