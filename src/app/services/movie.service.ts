// //
// // import { Injectable } from '@angular/core';
// // import { Observable, of } from 'rxjs';
// // import { movie1 } from '../data/mock-content';
// // import { Movies } from '../Shared/Models/movies';
// //
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class MovieService {
// //   private movies: Movies[] = movie1;
// //
// //   constructor() { }
// //
// //
// //   getMovies(): Observable<Movies[]> {
// //     return of(this.movies);
// //   }
// //
// //   getMovieById(id: number): Observable<Movies | undefined> {
// //     const movie = this.movies.find(movie => movie.id === id);
// //     return of(movie);
// //   }
// //
// //   addMovie(newMovie: Movies): Observable<Movies[]> {
// //     this.movies.push(newMovie);
// //     return of(this.movies);
// //   }
// //
// //
// //
// //   updateMovie(updatedMovie: Movies): Observable<Movies | undefined> {
// //     const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
// //     if (index !== -1) {
// //       this.movies[index] = updatedMovie;
// //       console.log('Updated movie:', this.movies[index]);
// //       return of(this.movies[index]); // Return only the updated movie
// //     } else {
// //       console.log('Movie not found with ID:', updatedMovie.id);
// //       return of(undefined);
// //     }
// //   }
// //
// //
// //
// //
// //   deleteMovie(movieId: number): Observable<Movies[]> {
// //     this.movies = this.movies.filter(movie => movie.id !== movieId);
// //     return of(this.movies);
// //   }
// // }
// //
// //
// //
//
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { movie1 } from '../data/mock-content';
// import { Movies } from '../Shared/Models/movies';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//   private movies: Movies[] = movie1;
//
//   constructor() { }
//
//   getMovies(): Observable<Movies[]> {
//     return of(this.movies);
//   }
//
//   getMovieById(id: number): Observable<Movies | undefined> {
//     const movie = this.movies.find(movie => movie.id === id);
//     return of(movie);
//   }
//
//   addMovie(newMovie: Movies): Observable<Movies[]> {
//     this.movies.push(newMovie);
//     return of(this.movies);
//   }
//
//   updateMovie(updatedMovie: Movies): Observable<Movies[]> {
//     const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
//     if (index !== -1) {
//       this.movies[index] = updatedMovie;
//       console.log('Updated movie:', this.movies[index]);
//     } else {
//       console.log('Movie not found with ID:', updatedMovie.id);
//     }
//     return of(this.movies); // Return the updated list
//   }
//
//   deleteMovie(movieId: number): Observable<Movies[]> {
//     this.movies = this.movies.filter(movie => movie.id !== movieId);
//     return of(this.movies);
//   }
// }
//
//

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movies } from '../Shared/Models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies'; // URL to the in-memory API

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Fetch all movies
  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.moviesUrl).pipe(
      catchError(this.handleError<Movies[]>('getMovies', []))
    );
  }

  // Fetch a movie by ID
  getMovieById(id: number): Observable<Movies | undefined> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movies>(url).pipe(
      catchError(this.handleError<Movies>(`getMovieById id=${id}`))
    );
  }

  // Add a new movie
  addMovie(newMovie: Movies): Observable<Movies> {
    return this.http.post<Movies>(this.moviesUrl, newMovie, this.httpOptions).pipe(
      catchError(this.handleError<Movies>('addMovie'))
    );
  }

  // Update an existing movie
  updateMovie(updatedMovie: Movies): Observable<any> {
    return this.http.put(this.moviesUrl, updatedMovie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  // Delete a movie by ID
  deleteMovie(movieId: number): Observable<Movies> {
    const url = `${this.moviesUrl}/${movieId}`;
    return this.http.delete<Movies>(url, this.httpOptions).pipe(
      catchError(this.handleError<Movies>('deleteMovie'))
    );
  }

  // Handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
