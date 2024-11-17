export interface Movies {
  id: number;
  name : string;
  director : string;
 // productionCompany : string;
  year : number ;
  alreadyWatched? : boolean;
  image : string;
  imageWidth: number;
  imageHeight: number;
  releaseDate: string; // New field for DatePipe
  budget: number; // New field for CurrencyPipe
  genre: string; // New field for UpperCasePipe

}
