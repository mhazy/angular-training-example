import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit, OnDestroy {

  post: any = {
    title: 'Test',
    body: 'Testing'
  }

  paramsSubscription: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onReturnButtonClicked() {
    this.router.navigate(['/posts']);
  }

  ngOnInit() {
    console.log('Post Container ngOnInit');
    this.paramsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.postsService.getPost(params.id)
          .subscribe(post => this.post = post);
      }
    );
  }

  ngOnDestroy() {
    console.log('Home Container ngOnDestroy');
  }
  
}
