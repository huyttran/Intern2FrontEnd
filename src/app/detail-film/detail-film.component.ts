import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  film = {
    id: '',
    title: '',
    producer: '',
    datePulish: '',
    actors: '',
    rate: '',
    image: '',
    status: ''
  };
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.http.get(`http://huytranapis.com/films/${params.get('id')}`))
      .subscribe((data: any) => this.film = data);
  }

  goBack(): void {
    this.location.back();
  }

  onSave() {
    this.http.put(`http://huytranapis.com/films/${this.film.id}`, this.film, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).subscribe(() => {
      this.goBack();
    });
  }
}
