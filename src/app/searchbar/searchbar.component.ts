import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  @Input() query: string;
  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearch() {
    this.search.emit(this.query);
  }
}
