import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Define the structure of a Movie
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

@Injectable({
  providedIn: 'root' // Makes the service globally available
})
export class MovieService {
  private http = inject(HttpClient); // Angular 18's dependency injection
  private apiKey = environment.tmdbApiKey; // Uses environment variable
  private baseUrl = 'https://api.themoviedb.org/3';

  // Fetch popular movies
  getPopularMovies() {
    return this.http.get<{ results: Movie[] }>(
      ${this.baseUrl}/movie/popular?api_key=${this.apiKey}
    );
  }

  // Search movies by keyword
  searchMovies(query: string) {
    return this.http.get<{ results: Movie[] }>(
      ${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}
    );
  }
}