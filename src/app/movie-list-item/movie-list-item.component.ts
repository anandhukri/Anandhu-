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

}
