import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private basePath: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get(this.basePath);
  }

  getCharacter(idCharacter: string) {
    return this.httpClient.get(this.basePath + idCharacter);
  }

  getCharactersFiltered(filter: { name: string; value: string }) {
    return this.httpClient.get(
      this.basePath + '?' + filter.name + '=' + filter.value
    );
  }

  getCharactersFilteredByGender(filter: string) {
    return this.httpClient.get(this.basePath + '?gender=' + filter);
  }

  getEpisode(idEpisode: number | null) {
    return this.httpClient.get(this.basePath + idEpisode);
  }
}
