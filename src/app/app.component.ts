import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/services/post.service';
import { Post } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lecture14-examples';
  
  posts: Post[] = [];


  constructor(private postService: PostService)
  {

  }

  ngOnInit(): void {
    
    this.postService.loadPosts().subscribe(d => {
      this.posts = d;
    })
  }
}
