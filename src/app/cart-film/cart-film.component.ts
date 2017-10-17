import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-film',
  templateUrl: './cart-film.component.html',
  styleUrls: ['./cart-film.component.scss']
})
export class CartFilmComponent implements OnInit {

  @Input() film;
  @Output() fireEvent = new EventEmitter<boolean>();
  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  viewDetail() {
    this.router.navigate(['/detail', this.film.id]);
  }

  delete() {
    event.stopPropagation();
    if (confirm('Are you sure you want to detele movie ' + this.film.title)) {
      this.http.delete(`http://huytranapis.com/films/${this.film.id}`, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
      }).subscribe(() => {
        this.fireEvent.emit(this.film.id);
      });
    }
  }
}
