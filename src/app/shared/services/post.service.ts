import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  loadPosts(){
    return this.http.get<Post[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
