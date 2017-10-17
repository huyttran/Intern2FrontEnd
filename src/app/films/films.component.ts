import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://huytranapis.com/films').subscribe((data: any) => {
      this.films = data;
    });
  }

  regain(event) {
    this.films = this.films.filter(film => film.id !== event);
  }
}
