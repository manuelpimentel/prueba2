import { Component, OnInit } from '@angular/core';
import {Course} from '../common/course';
import { ApiService } from "../api.service";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[ApiService]
})
export class CoursesComponent implements OnInit {

  title : string = "Cursos disponibles";
  courses : Course[];
  
  constructor(private ApiService: ApiService) {

   }

   /*getCourses(){
     this.ApiService.getCourses().then(
       courses => this.courses = courses
     )
   }*/

  ngOnInit() {
   // this.getCourses();
  }

}
