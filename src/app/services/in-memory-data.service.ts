import {InMemoryDbService} from "angular-in-memory-web-api";
import { Injectable } from '@angular/core';
import {Movies} from "../Shared/Models/movies";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb():{movies: Movies[]} {


    const movies: Movies[] = [] = [
      {id:1, name:"Barroz",director:"Mohenlal",productionCompany : "Ashirvad cinemas",  year: 2024, alreadyWatched: true },
      {id: 2 ,name:"ARM",director:"Jithin lal",productionCompany:"Magic Frames",year:2024, alreadyWatched: false},
      {id: 3, name:"GOATLIFE",director:"Blessy",productionCompany:"PJ filims",year:2024, alreadyWatched: true},
      {id:4, name:"Oppenheimer",director:"Christopher Nolan",productionCompany:"Christopher Nolan",year:2024, alreadyWatched: true},
      {id:5 , name:"Avatar",director:"James Cameron",productionCompany:"warner bros",year:2023, alreadyWatched: true},
      {id:6 , name:"Spiderman",director:"Sam Raimi",productionCompany:"marvel",year:2024, alreadyWatched: false}
    ];
    return {movies}

  }

  constructor() { }
}
