import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
//import {routes} from "./app/app.routes";
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";



const routes: Routes =[
  {path: '',redirectTo: '/', pathMatch: 'full',},
  {path: 'movies',component: MovieListComponent},
  {path: 'movies/:name', component: MovieListItemComponent},
  //{path: 'modify-movie', component: Modi},
  {path: 'movies/:name', component: MovieListItemComponent},

]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));


