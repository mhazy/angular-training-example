import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Home Container ngOnInit');
  }

  ngOnDestroy() {
    console.log('Home Container ngOnDestroy');
  }

}
