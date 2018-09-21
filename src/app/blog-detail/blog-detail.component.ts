import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BlogService } from '../services/blog.service';

@Component({
	selector: 'app-blog-detail',
  	templateUrl: './blog-detail.component.html',
  	styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

	public blogObject: any = {}
	public dataLoading: boolean = true

  	constructor(private _BlogService: BlogService, private _Route: ActivatedRoute ) { }

  	ngOnInit() {
  		this._Route.params.subscribe(routeParams => {
			this.getBlogDetailAPI(routeParams.id);
		});
  	}

  	getBlogDetailAPI(id) {
        this._BlogService.getBlogDetailApi(id)
            .subscribe(
                (data) => {
                	this.dataLoading = false
                    this.blogObject  = JSON.parse(data.blogs)
                },
                err => console.log(err),
                () => console.log('Done Loading Blog API')
            )
    }

}
