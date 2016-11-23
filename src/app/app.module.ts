import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { PostsService } from './posts.service';
import { JsonApiService } from './json-api.service';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostDateComponent } from './post-date/post-date.component';
import { ExcerptPipe } from './excerpt.pipe';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TwitterShareComponent } from './twitter-share/twitter-share.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';

const APP_ROUTING: Routes = [
  // Home Page
  {
    path: '',
    component: HomeContainerComponent
  },
 
  // Posts Page
  {
    path: 'posts',
    component: PostsContainerComponent
  },

  // Post Page
  {
    path: 'posts/:id',
    component: PostContainerComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    PostsContainerComponent,
    PostTitleComponent,
    PostDateComponent,
    ExcerptPipe,
    SearchbarComponent,
    TwitterShareComponent,
    HomeContainerComponent,
    PostContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [
    PostsService,
    JsonApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
