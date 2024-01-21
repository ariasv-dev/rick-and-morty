import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private basePath: string = 'https://rickandmortyapi.com/api/episode/';

  constructor(private httpClient: HttpClient) {}

  getCharacterEpisodesInfo(episodes: number[]) {
    let query: string;

    episodes.length < 6
      ? (query = episodes.join(','))
      : (query = episodes.slice(0, 5).join(','));
    return this.httpClient.get(this.basePath + query);
  }
}
