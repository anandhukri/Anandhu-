import {Component, Input,OnInit} from '@angular/core';
import {Movies} from "../Shared/Models/movies";
import {NgForOf, NgIf, NgFor, NgStyle, DatePipe, UpperCasePipe, CurrencyPipe} from "@angular/common";
import {FullMovieDetailsPipe} from "../Pipes/full-movie-details.pipe";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
// import {HoverHighlightDirective} from "../hover-highlight.directive";

let input = Input();

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgForOf, NgFor,
    NgIf, NgStyle, FullMovieDetailsPipe, DatePipe, UpperCasePipe, CurrencyPipe, MatCardModule, MatButtonModule, MatTooltipModule,
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent implements OnInit {

  @Input() movie1?: Movies;
  imageWidth: number =20;
  imageHeight: number =20;

  ngOnInit() {
    if (this.movie1 ) {
      this.imageWidth = this.movie1.imageWidth || this.imageWidth;
      this.imageHeight = this.movie1.imageHeight || this.imageHeight;
    }
  }

  editMovie(id: number) {

  }

  deleteMovie(id: number) {

  }
}
