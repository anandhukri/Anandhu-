// // import { Injectable } from '@angular/core';
// // //import our mock data
// // import {movie1} from "../data/mock-content";
// // import { Observable, of } from 'rxjs';
// // import{Movies} from "../Shared/Models/movies";
// //
// // //Notice the new Decorator
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class MovieService {
// //   private movie: Movies[] = movie1;//Local copy of student data for CRUD Operations
// //   constructor() { }
// //   //Returns all students
// //   getMovies(): Observable<Movies[]> {
// //     return of(movie1); //Return and observable that emits mock student data
// //   }}
// //
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';           // Import RxJS Observable and of
// import { movie1 } from '../data/mock-content';    // Import mock data
// import { Movies } from '../Shared/Models/movies'; // Import the Movies model
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//   private movies: Movies[] = movie1; // Local copy of movie data for CRUD Operations
//
//   constructor() { }
//
//   // Method to get all movies
//   getMovies(): Observable<Movies[]> {
//     return of(this.movies); // Return an observable that emits the movie array
//   }
//
//
//
//
//
//
//   // getMovieByName(movieName: string): Observable<Movies | any> {
//   //   const foundMovie = this.movies.find(movie => movie.name === movieName);
//   //   return of(foundMovie)
//   // }
//
//   getMovieById(id: number): Observable<Movies | undefined> {
//     const movie = this.movies.find(movie => movie.id === id);
//     return of(movie);
//   }
//
//
//
//   addMovie(newMovie:Movies) : Observable<Movies[]>{
//     this.movies.push(newMovie)
//     return of(this.movies)
//   }
//
//   updateMovie(updatedMovie: Movies):Observable<Movies[]>{
//     const index = this.movies.findIndex(movie1 => movie1.id === updatedMovie.id);
//     if(index !== -1){
//       this.movies[index] =updatedMovie;
//     }
//     return of(this.movies);
//
//   }
//
//   deleteMovie(movieId: number): Observable<Movies[]> {
//     this.movies = this.movies.filter(movie => movie.id !== movieId);
//     return of(this.movies);
//   }
//
//
// }
//



import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';           // Import RxJS Observable and of
import { movie1 } from '../data/mock-content';    // Import mock data
import { Movies } from '../Shared/Models/movies'; // Import the Movies model

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movies[] = movie1; // Local copy of movie data for CRUD Operations

  constructor() { }

  // Method to get all movies
  getMovies(): Observable<Movies[]> {
    return of(this.movies); // Return an observable that emits the movie array
  }

  getMovieById(id: number): Observable<Movies | undefined> {
    const movie = this.movies.find(movie => movie.id === id);
    return of(movie);
  }

  addMovie(newMovie: Movies): Observable<Movies[]> {
    this.movies.push(newMovie);
    return of(this.movies);
  }

  updateMovie(updatedMovie: Movies): Observable<Movies[]> {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
      console.log('Updated movie:', this.movies[index]); // Log the updated movie
    } else {
      console.log('Movie not found with ID:', updatedMovie.id); // Log if movie is not found
    }
    return of(this.movies);
  }



  deleteMovie(movieId: number): Observable<Movies[]> {
    this.movies = this.movies.filter(movie => movie.id !== movieId);
    return of(this.movies);
  }
}
