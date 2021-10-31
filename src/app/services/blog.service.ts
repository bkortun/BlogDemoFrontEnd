import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../components/models/blog';
import { ListResponseModel } from '../components/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string="https://localhost:44311/api/blogs/getall";

  getBlogs():Observable<ListResponseModel<Blog>>{
    return this.httpClient.get<ListResponseModel<Blog>>(this.apiUrl);
  }
}
