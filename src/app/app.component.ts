import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Movies} from "./Shared/Models/movies";
import {NgForOf, NgIf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieService} from "./services/movie.service";
import {movie1} from "./data/mock-content";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, MovieListComponent, MovieListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CleanCode';
  SelectedMovie: Movies | undefined;

  constructor(private movieService : MovieService) {
  }

  ngOnInit(){
    this.movieService.getMovieByName("ARM").subscribe(movie1 => {
      this.SelectedMovie = movie1
    })
  }


  // title = 'Assignment2';
  // movie1: Movies [] = [ {name:"Barroz",director:"Mohenlal",productionCompany : "Ashirvad cinemas", country : "India", year: 2024, alreadyWatched: true },
  //   {name:"ARM",director:"Jithin lal",productionCompany:"Magic Frames",country:"",year:2024, alreadyWatched: false},
  //   {name:"GOATLIFE",director:"Blessy",productionCompany:"PJ filims",country:"",year:2024, alreadyWatched: true},
  //   {name:"Oppenheimer",director:"Christopher Nolan",productionCompany:"Christopher Nolan",country:"America",year:2024, alreadyWatched: true},
  //   {name:"Avatar",director:"James Cameron",productionCompany:"warner bros",country:"America",year:2023, alreadyWatched: true},
  //   {name:"Spiderman",director:"Sam Raimi",productionCompany:"marvel",country:"America",year:2024, alreadyWatched: false}
  //
  // ]

}
