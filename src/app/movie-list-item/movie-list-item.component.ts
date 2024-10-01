import {Component, Input} from '@angular/core';
import {Movies} from "../Shared/Models/movies";
import {NgForOf, NgIf} from "@angular/common";

let input = Input();

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {
  @Input() movie1?: Movies;
  // @Input() movie!: Movies;

}
