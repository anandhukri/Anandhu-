// import {Component, OnInit} from '@angular/core';
// import {Movies} from "../Shared/Models/movies";
// import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
// import {NgForOf} from "@angular/common";
// import {movie1} from "../data/mock-content";
// import {MovieService} from "../services/movie.service";
//
// //
// @Component({
//   selector: 'app-movie-list',
//   standalone: true,
//   imports: [
//     MovieListItemComponent,
//     NgForOf,
//   ],
//   templateUrl: './movie-list.component.html',
//   styleUrl: './movie-list.component.css'
// })
// export class MovieListComponent implements OnInit{
//
//   movieList: Movies[] = [];
//
//   constructor(private movieService: MovieService) {
//
//   }
//
//   ngOnInit() {
//     this.movieService.getMovies().subscribe({
//       next: (data: Movies[]) => this.movieList = data,
//       error:err => console.error("Error fetching Movies", err),
//       complete:() =>console.log("Movies data fetch complete!")
//
//
//     })
//   }
//
//
//   //protected readonly movie1 = movie1;
//   protected readonly movie1 = movie1;
// }

// import { Component, OnInit } from '@angular/core';
// import { Movies } from "../Shared/Models/movies";
// import { MovieListItemComponent } from "../movie-list-item/movie-list-item.component";
// import { NgForOf } from "@angular/common";
// import { MovieService } from "../services/movie.service";
// import { Router } from '@angular/router';
// import {movie1} from "../data/mock-content";
//
// @Component({
//   selector: 'app-movie-list',
//   standalone: true,
//   imports: [
//     MovieListItemComponent,
//     NgForOf,
//   ],
//   templateUrl: './movie-list.component.html',
//   styleUrls: ['./movie-list.component.css']
// })
// export class MovieListComponent implements OnInit {
//
//   movieList: Movies[] = [];
//
//   constructor(private movieService: MovieService, private router: Router) { }
//
//   ngOnInit() {
//     this.movieService.getMovies().subscribe({
//       next: (data: Movies[]) => this.movieList = data,
//       error: err => console.error("Error fetching Movies", err),
//       complete: () => console.log("Movies data fetch complete!")
//     });
//   }
//
//   editMovie(movieId: number) {
//     console.log('Redirecting to edit movie with ID:', movieId); // Debug log
//     this.router.navigate(['/modify-list-item', movieId]); // Ensure the route matches your routing configuration
//   }
//
//   deleteMovie(movieId: number) {
//     this.movieService.deleteMovie(movieId).subscribe(() => {
//       this.movieList = this.movieList.filter(movie => movie.id !== movieId);
//       console.log('Movie deleted successfully');
//     });
//   }
//
//   protected readonly movie1 = movie1;
// }


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

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (data: Movies[]) => this.movieList = data,
      error: err => console.error("Error fetching Movies", err),
      complete: () => console.log("Movies data fetch complete!")
    });
  }

  // editMovie(movieId: number) {
  //   console.log('Redirecting to edit movie with ID:', movieId); // Debug log
  //   this.router.navigate(['/modify-list-item', movieId]); // Ensure the route matches your routing configuration
  // }
  editMovie(movieId: number) {
    console.log('Redirecting to edit movie with ID:', movieId); // Debug log
    this.router.navigate(['/modify-list-item', movieId]);
  }




  deleteMovie(movieId: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.deleteMovie(movieId).subscribe(() => {
        this.movieList = this.movieList.filter(movie => movie.id !== movieId);
        console.log('Movie deleted successfully');
      });
    }
  }

  protected readonly movie1 = movie1;
}
