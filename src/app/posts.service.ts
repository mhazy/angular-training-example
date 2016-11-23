import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  
  constructor(private jsonApiService: JsonApiService) {}

  getPosts() {
    return this.jsonApiService.get('posts');
  }

  getPost(id: any) {
    return this.jsonApiService.get('posts/' + id);
  }

  getFilteredPosts(query: string) {
    return this.jsonApiService.get('posts')
      .map((posts) => {
        return this.filterPosts(posts, query);
      });
  }

  filterPosts(posts: any[], query: string) {
    return posts.filter((post) => {
      return post.title
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

}
