// import { Injectable } from '@angular/core';
// //import our mock data
// import {movie1} from "../data/mock-content";
// import { Observable, of } from 'rxjs';
// import{Movies} from "../Shared/Models/movies";
//
// //Notice the new Decorator
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//   private movie: Movies[] = movie1;//Local copy of student data for CRUD Operations
//   constructor() { }
//   //Returns all students
//   getMovies(): Observable<Movies[]> {
//     return of(movie1); //Return and observable that emits mock student data
//   }}
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

  getMovieByName(movieName: string): Observable<Movies | any> {
    const foundMovie = this.movies.find(movie => movie.name === movieName);
    return of(foundMovie)
  }

  addMovie(newMovie:Movies) : Observable<Movies[]>{
    this.movies.push(newMovie)
    return of(this.movies)
  }

  updateMovie(updatedMovie: Movies):Observable<Movies[]>{
    const index = this.movies.findIndex(movie1 => movie1.name === updatedMovie.name);
    if(index !== -1){
      this.movies[index] =updatedMovie;
    }
    return of(this.movies);

  }

  deleteMovie(movieName: string): Observable<Movies[]>{
    this.movies = this.movies.filter(movie1 => movie1.name !== movieName);
    return of (this.movies);
  }



}


// //Adding basic CRUD methods
// //Create: Add USer
// addStudent(newStudent:User) : Observable<User[]>{
//   this.students.push(newStudent)
//   return of(this.students);
// }
//
// //Update an Existing user
// updateStudent(updatedStudent: User): Observable<User[]> {
//   const index = this.students.findIndex(user => user.id === updatedStudent.id);
//   if (index !== -1) {
//   this.students[index] = updatedStudent;
// }
// return of(this.students);
// }
// //Delete: Remove a user by ID
// deleteStudent(studentId: number): Observable<User[]> {
//   this.students = this.students.filter(user => user.id !== studentId);
//   return of(this.students);
// }






