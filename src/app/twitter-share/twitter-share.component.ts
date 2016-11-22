import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-twitter-share',
  templateUrl: './twitter-share.component.html',
  styleUrls: ['./twitter-share.component.css']
})
export class TwitterShareComponent implements AfterViewInit {

  @Input() content: string;

  ngAfterViewInit() {
    window['twttr'] = (function(d, s, id) {
      var js: any, fjs = d.getElementsByTagName(s)[0],
        t = window['twttr'] || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  }
}
