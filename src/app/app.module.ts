import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CartFilmComponent } from './cart-film/cart-film.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmsComponent } from './films/films.component';
import { FormsModule } from '@angular/forms';
import { AddFilmComponent } from './add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    CartFilmComponent,
    DetailFilmComponent,
    FilmsComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
