import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  webSiteName = 'Galaxy Cinema';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
