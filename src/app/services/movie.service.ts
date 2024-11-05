

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { movie1 } from '../data/mock-content';
import { Movies } from '../Shared/Models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movies[] = movie1;

  constructor() { }


  getMovies(): Observable<Movies[]> {
    return of(this.movies);
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
      console.log('Updated movie:', this.movies[index]);
    } else {
      console.log('Movie not found with ID:', updatedMovie.id);
    }
    return of(this.movies);
  }

  deleteMovie(movieId: number): Observable<Movies[]> {
    this.movies = this.movies.filter(movie => movie.id !== movieId);
    return of(this.movies);
  }
}
