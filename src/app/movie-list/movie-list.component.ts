import { Component } from '@angular/core';
import {Movies} from "../Shared/Models/movies";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movie1: Movies [] = [ {name:"Barroz",director:"Mohenlal",productionCompany : "Ashirvad cinemas", country : "India", year: 2024, alreadyWatched: true },
    {name:"ARM",director:"Jithin lal",productionCompany:"Magic Frames",country:"",year:2024, alreadyWatched: false},
    {name:"GOATLIFE",director:"Blessy",productionCompany:"PJ filims",country:"",year:2024, alreadyWatched: true},
    {name:"Oppenheimer",director:"Christopher Nolan",productionCompany:"Christopher Nolan",country:"America",year:2024, alreadyWatched: true},
    {name:"Avatar",director:"James Cameron",productionCompany:"warner bros",country:"America",year:2023, alreadyWatched: true},
    {name:"Spiderman",director:"Sam Raimi",productionCompany:"marvel",country:"America",year:2024, alreadyWatched: false}

  ]

}
