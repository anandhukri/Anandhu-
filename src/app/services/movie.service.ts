

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movies } from '../Shared/Models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.moviesUrl).pipe(
      catchError(this.handleError<Movies[]>('getMovies', []))
    );
  }


  getMovieById(id: number): Observable<Movies | undefined> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movies>(url).pipe(
      catchError(this.handleError<Movies>(`getMovieById id=${id}`))
    );
  }

  addMovie(newMovie: Movies): Observable<Movies> {
    return this.http.post<Movies>(this.moviesUrl, newMovie, this.httpOptions).pipe(
      catchError(this.handleError<Movies>('addMovie'))
    );
  }


  updateMovie(updatedMovie: Movies): Observable<any> {
    return this.http.put(this.moviesUrl, updatedMovie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  deleteMovie(movieId: number): Observable<Movies> {
    const url = `${this.moviesUrl}/${movieId}`;
    return this.http.delete<Movies>(url, this.httpOptions).pipe(
      catchError(this.handleError<Movies>('deleteMovie'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
