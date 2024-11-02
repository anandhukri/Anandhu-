import {Component, OnInit} from '@angular/core';
import {Movies} from "../Shared/Models/movies";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {NgForOf} from "@angular/common";
import {movie1} from "../data/mock-content";
import {MovieService} from "../services/movie.service";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  movieList: Movies[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (data: Movies[]) => this.movieList = data,
      error:err => console.error("Error fetching Movies", err),
      complete:() =>console.log("Movies data fetch complete!")


    })
  }


  //protected readonly movie1 = movie1;
  protected readonly movie1 = movie1;
}
