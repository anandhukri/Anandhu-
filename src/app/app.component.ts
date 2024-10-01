import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Movies} from "./Shared/Models/movies";
import {NgForOf, NgIf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Assignment2';
  movie1: Movies [] = [ {name:"Barroz",director:"Mohenlal",productionCompany : "Ashirvad cinemas", country : "India", year: 2024, alreadyWatched: true },
    {name:"ARM",director:"Jithin lal",productionCompany:"Magic Frames",country:"",year:2024, alreadyWatched: false},
    {name:"GOATLIFE",director:"Blessy",productionCompany:"PJ filims",country:"",year:2024, alreadyWatched: true},
    {name:"Oppenheimer",director:"Christopher Nolan",productionCompany:"Christopher Nolan",country:"America",year:2024, alreadyWatched: true},
    {name:"Avatar",director:"James Cameron",productionCompany:"warner bros",country:"America",year:2023, alreadyWatched: true},
    {name:"Spiderman",director:"Sam Raimi",productionCompany:"marvel",country:"America",year:2024, alreadyWatched: false}

  ]

}
