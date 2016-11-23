import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable()
export class JsonApiService {

  constructor(private http: Http) { }

  get(type: string) {
    return this.http.get(API_URL + type)
      .map(response => response.json())
  }
}
