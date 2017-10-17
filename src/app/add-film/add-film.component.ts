import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {
  film = {
    title: '',
    description: 'string',
    types: [0],
    datePulish: '2017-10-17T14:03:05.877Z',
    producer: '',
    rate: 0,
    image: 'string',
    actors: ['string'],
    status: 0,
    id: 'string'
  };

  constructor(
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  onSave() {
    this.http.post('http://huytranapis.com/films', this.film, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).subscribe(() => {
      this.goBack();
    });
  }

}
