import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Movies} from "./Shared/Models/movies";
import {NgForOf, NgIf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieService} from "./services/movie.service";
import {movie1} from "./data/mock-content";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, MovieListComponent, MovieListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CleanCode';
  SelectedMovie: Movies | undefined;

  constructor(private movieService : MovieService) {
  }

  ngOnInit(){
    this.movieService.getMovieById(2).subscribe(movie1 => {
      this.SelectedMovie = movie1
    })
  }



}
