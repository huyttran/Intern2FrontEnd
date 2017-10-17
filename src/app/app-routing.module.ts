import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailFilmComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'addfilm', component: AddFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
