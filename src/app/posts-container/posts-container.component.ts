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
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  updateQuery(query: string) {
    this.query = query;
    this.postsService.getFilteredPosts(this.query)
      .subscribe((posts) => {
        this.posts = posts;
      })
  }

}
