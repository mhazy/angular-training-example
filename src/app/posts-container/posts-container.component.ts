import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
  private postsService: PostsService;
  private posts: any[];
  private query: string = '';

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  ngOnInit() {
    this.posts = this.getPosts();
  }

  getPosts() {
    if (this.query === '') {
      return this.postsService.getPosts();
    } else {
      return this.postsService.getFilteredPosts(this.query);
    }
  }

  updateQuery(query: string) {
    this.query = query;
    this.posts = this.getPosts();
  }

}
