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
  latitude:any;
  altitude:any;

  constructor( private OportunityService : OportunityService) 
  { }

  showLatitude(){
    this.OportunityService.makeGet().subscribe((res:any)=>{        
      this.latitude = res.latitude;      
    });
  }

  ngOnInit() {
  }

}
