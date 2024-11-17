import {InMemoryDbService} from "angular-in-memory-web-api";
import { Injectable } from '@angular/core';
import {Movies} from "./Shared/Models/movies";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb():{movies: Movies[]} {



    const movies: Movies[] = [] = [
      {id:1, name:"Barroz",director:"Mohenlal",   year: 2024, alreadyWatched: true, image: "/image/barroz.jpeg", imageWidth: 50, imageHeight:50 },
      {id: 2 ,name:"ARM",director:"Jithin lal",year:2024, alreadyWatched: false, image: "/image/ARM.webp", imageWidth: 50, imageHeight:50},
      {id: 3, name:"GOATLIFE",director:"Blessy",year:2024, alreadyWatched: true,image: "/image/GOATLIFE.jpeg", imageWidth: 50, imageHeight:50},
      {id:4, name:"Oppenheimer",director:"Christopher Nolan",year:2024, alreadyWatched: true, image: "/image/Oppenheimer.jpeg", imageWidth: 50, imageHeight:50},
      {id:5 , name:"Avatar",director:"James Cameron",year:2023, alreadyWatched: true,image: "/image/AVATAR.jpeg", imageWidth: 50, imageHeight:50},
      {id:6 , name:"Spiderman",director:"Sam Raimi",year:2024, alreadyWatched: false,image: "/image/Spiderman.jpeg", imageWidth: 50, imageHeight:50}

    ];
    return {movies}

  }
  constructor() { }
}
