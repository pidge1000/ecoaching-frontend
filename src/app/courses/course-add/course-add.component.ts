import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'app-course-add',
  	templateUrl: './course-add.component.html',
  	styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

	public coursesDropdown = []
  	constructor(private _CoursesService: CoursesService) {
  		
  	}

  	ngOnInit() {
  		this._CoursesService.getCoursesDropdownApi()
  			.subscribe((result: any) => {
  				if(result.status == 200) {
  					this.coursesDropdown = JSON.parse(result.data)
  				}
  			},	
  			err => console.error(err),
  			() => console.log('Done Loading API'))
  	}

}
