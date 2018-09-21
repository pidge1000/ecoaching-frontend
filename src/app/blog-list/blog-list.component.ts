import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog.service';

@Component({
	selector: 'app-blog-list',
  	templateUrl: './blog-list.component.html',
  	styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

	public blogArray = []
	public dataLoading: boolean = true
	constructor(private _BlogService: BlogService) { }

  	ngOnInit() {
  		this.getBlogApi()
  	}

  	getBlogApi() {
        this._BlogService.getBlogApi()
            .subscribe(
                (data) => { 
                    this.blogArray = JSON.parse(data.blogs)
                    this.dataLoading = false
                },
                err => console.log(err),
                () => console.log('Done Loading Blog API')
            )
    }

}
