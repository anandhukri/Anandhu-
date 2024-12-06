//
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter, RouterModule, Routes } from '@angular/router';
// import {HttpClientModule, provideHttpClient} from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './app/in-memory-data.service'; // Ensure this path is correct
// import {importProvidersFrom, NgModule} from '@angular/core';
// import { MovieListComponent } from './app/movie-list/movie-list.component';
// import { MovieListItemComponent } from './app/movie-list-item/movie-list-item.component';
// import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
// import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
// import {FullMovieDetailsPipe} from "./app/Pipes/full-movie-details.pipe";
//
// // Routes
// const routes: Routes = [
//
//   { path: '', redirectTo: '/', pathMatch: 'full' },
//   { path: 'movies', component: MovieListComponent },
//   { path: 'movies/:name', component: MovieListItemComponent },
//
//   {path: 'movies/:id',
//   loadComponent: () =>
//   import('./app/movie-list-item/movie-list-item.component').then(m => m.MovieListItemComponent)}, //Lazy Loaded
//
//   { path: 'modify-list-item/:id', component: ModifyListItemComponent },
//
//
//   { path: 'modify-movie',
//     loadComponent: () =>
//       import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
//
//   { path: '**', component: PageNotFoundComponent },
// ];
//
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//     HttpClientModule,
//     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
//     FullMovieDetailsPipe
//   ],
//   exports: [RouterModule],
//   declarations: []
//
// })
//
// export class AppRoutingModule {}
//
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideRouter(routes),
//     importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
//
//   ]
// }).catch((err) => console.error(err));
//


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service'; // Ensure this path is correct
import { importProvidersFrom, NgModule } from '@angular/core';
import { MovieListComponent } from './app/movie-list/movie-list.component';
import { MovieListItemComponent } from './app/movie-list-item/movie-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { FullMovieDetailsPipe } from './app/Pipes/full-movie-details.pipe';

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:name', component: MovieListItemComponent },

  // Lazy Loaded Components
  { path: 'movies/:id',
    loadComponent: () => import('./app/movie-list-item/movie-list-item.component').then(m => m.MovieListItemComponent)
  },

  { path: 'modify-list-item/:id', component: ModifyListItemComponent },

  { path: 'modify-movie',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    FullMovieDetailsPipe,
    MovieListComponent,
    ModifyListItemComponent,
    PageNotFoundComponent,
    MovieListItemComponent
  ],
  exports: [RouterModule],
  declarations: [

  ]
})

export class AppRoutingModule {}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ]
}).catch((err) => console.error(err));
