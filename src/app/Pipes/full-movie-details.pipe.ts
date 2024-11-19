import { Pipe, PipeTransform } from '@angular/core';
import {Movies} from "../Shared/Models/movies";
import {movie1} from "../data/mock-content";

@Pipe({
  name: 'fullMovieDetails',
  standalone: true
})
export class FullMovieDetailsPipe implements PipeTransform {


transform(movies: Movies): String {
  return `${movies.name} directed by ${movies.director}`;
}
}
