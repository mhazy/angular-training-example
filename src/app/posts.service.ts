import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  private posts = [
    {
      title: 'Post One'
    },
    {
      title: 'Post Two'
    },
    {
      title: 'Post Three'
    }
  ]

  getPosts() {
    return this.posts;
  }

}