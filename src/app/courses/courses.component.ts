import { Component, OnInit } from '@angular/core';


export interface Course{
  id : number,
  name : string,
  image : string,
  price : number
}

const COURSES : Course[] = [
  {
    id : 1,
    name : 'Angular 2',
    image : 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
    price: 100
  },
  {
    id : 2,
    name : 'Python',
    image : 'https://www.python.org/static/opengraph-icon-200x200.png',
    price: 120
  },


]

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title : string = "Cursos disponibles";
  courses : Course[] = COURSES;
  
  constructor() { }

  ngOnInit() {
  }

}
