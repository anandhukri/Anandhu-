import { Injectable } from '@angular/core';
//import our mock data
import {movie1} from "../data/mock-content";
import { Observable, of } from 'rxjs';
import{Movies} from "../Shared/Models/movies";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movie: Movies[] = movie1;//Local copy of student data for CRUD Operations
  constructor() { }
  //Returns all students
  getMovies(): Observable<Movies[]> {
    return of(movie1); //Return and observable that emits mock student data
  }}

