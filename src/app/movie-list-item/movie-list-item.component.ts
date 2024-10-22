import {Component, Input,OnInit} from '@angular/core';
import {Movies} from "../Shared/Models/movies";
import {NgForOf, NgIf, NgFor, NgStyle} from "@angular/common";

let input = Input();

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgForOf, NgFor,
    NgIf, NgStyle
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {
  @Input() movie1?: Movies;
  // @Input() movie!: Movies;
 // condition: any;

}
