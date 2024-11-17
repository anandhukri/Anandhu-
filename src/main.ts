
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service'; // Ensure this path is correct
import {importProvidersFrom, NgModule} from '@angular/core';
import { MovieListComponent } from './app/movie-list/movie-list.component';
import { MovieListItemComponent } from './app/movie-list-item/movie-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:name', component: MovieListItemComponent },
  { path: 'modify-list-item/:id', component: ModifyListItemComponent },
  { path: 'modify-movie', component: ModifyListItemComponent },
  { path: 'nothing', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically

  ]
}).catch((err) => console.error(err));



