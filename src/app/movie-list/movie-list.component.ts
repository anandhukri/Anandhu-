

import { Component, OnInit } from '@angular/core';
import { Movies } from "../Shared/Models/movies";
import { MovieListItemComponent } from "../movie-list-item/movie-list-item.component";
import { NgForOf } from "@angular/common";
import { MovieService } from "../services/movie.service";
import { Router } from '@angular/router';
import { movie1 } from "../data/mock-content";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movies[] = [];
  errorMessage: string = '' ;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {

    this.getMovies();
  }
  getMovies() {
    this.movieService.getMovies().subscribe({
      next: (data: Movies[]) => {
        this.movieList = data;
        console.log("fetched");
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = ' failed to load movies' ;
      }
    })

  }


  editMovie(movieId: number) {
    console.log('Redirecting to edit movie with ID:', movieId);
    this.router.navigate(['/modify-list-item', movieId]);
  }




  deleteMovie(movieId: number) {
    if (confirm('do you want to delete this movie?')) {
      this.movieService.deleteMovie(movieId).subscribe({
        next: () => {
          this.movieList = this.movieList.filter(movie => movie.id !== movieId);
          console.log('deleted successfully');
        },
        error: (err) => {
          console.error("Error deleting movie:", err);
          this.errorMessage = 'Failed to delete the movie.';
        }
      });
    }
  }



  protected readonly movie1 = movie1;
}
