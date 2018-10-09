import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'app-courses-list',
  	templateUrl: './courses-list.component.html',
  	styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

	public coursesArray = []
  	constructor(private _CoursesService: CoursesService) { }

  	ngOnInit() {
  		this._CoursesService.getCoursesListApi()
  			.subscribe((result: any) => {
  				if(result.status == 200) {
  					this.coursesArray = JSON.parse(result.data)
  				}
  			},	
  			err => console.error(err),
  			() => console.log('Done Loading API'))
  	}

}
