
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Movies } from '../Shared/Models/movies';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  movieForm: FormGroup;
  movieId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {

    this.movieForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      director: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1888)]],
      alreadyWatched: [false]
    });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      if (this.movieId) {
        this.movieService.getMovieById(this.movieId).subscribe(movie => {
          if (movie) {
            this.movieForm.patchValue(movie);
          } else {
            console.error('Movie not found!');
          }
        });
      }
    });
  }




  loadMovie(id: number) {
    this.movieService.getMovieById(id).subscribe(movie => {
      console.log(movie);
    })
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const formValues: Movies = this.movieForm.value;

      if (this.movieId) {

        this.movieService.updateMovie(formValues).subscribe(() => {
          console.log('Movie updated successfully:', formValues);
          this.movieForm.reset();
        });
      } else {

        this.movieService.addMovie(formValues).subscribe(() => {
          console.log('Movie added successfully:', formValues);
          this.movieForm.reset();
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
