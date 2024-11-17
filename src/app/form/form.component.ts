
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Movies } from '../Shared/Models/movies';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contentForm: FormGroup;
  formSubmissionSuccess: boolean = false;
  isEditMode: boolean = false;
  movieToEditId: number | null = null;
  errorMessage: string = 'error';


  constructor(
    public formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.contentForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      director: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1888)]],
      alreadyWatched: [false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = +params.get('id');
      if (movieId) {
        this.isEditMode = true;
        this.loadMovie(movieId);
      }
    });
  }

  loadMovie(id: number) {
    this.movieService.getMovieById(id).subscribe(movie => {
      if (movie) {
        this.movieToEditId = movie.id;
        this.contentForm.patchValue(movie);
      } else {
        console.error('Movie not found for ID:', id);
      }
    }, error => {
      console.error('Error loading movie:', error);
    });
  }

  onSubmit() {
    console.log('Submit triggered');

    if (this.contentForm.valid) {
      const newMovie: Movies = this.contentForm.value;

      if (this.isEditMode) {
        // Ensure the ID is set for updating
        if (this.movieToEditId !== null) {
          newMovie.id = this.movieToEditId;
        }

        // Call the update service method
        this.movieService.updateMovie(newMovie).subscribe(() => {
          console.log('Movie updated:', newMovie);
          this.formSubmissionSuccess = true;
          this.isEditMode = false;
          this.contentForm.reset();
          this.movieToEditId = null;
        }, error => {
          console.error('Error updating movie:', error);
        });
      } else {

        this.movieService.addMovie(newMovie).subscribe(() => {
          console.log('Movie added:', newMovie);
          this.formSubmissionSuccess = true;
          this.contentForm.reset();
        }, error => {
          console.error('Error adding movie:', error);
        });
      }
    } else {
      console.log('Form is invalid');
      this.formSubmissionSuccess = false;
    }
  }

//
//   getControl(controlName: string): AbstractControl {
//     return this.contentForm.get(controlName) as AbstractControl;
//   }
// }

}
