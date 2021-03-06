import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  title: string = 'Post Title Default';

  @Input()
  date: Date;

  @Input()
  body: string;

  @Input()
  excerpt: boolean;

}
