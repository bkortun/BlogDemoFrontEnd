import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../models/blog';
import { ListResponseModel } from '../models/listResponseModel';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  blogs:Blog[]=[];

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.blogService.getBlogs().subscribe(response=>{this.blogs=response.data});
  }

}
