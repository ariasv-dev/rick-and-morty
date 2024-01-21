import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private basePath: string = 'https://rickandmortyapi.com/api/character/';

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getCharactersFilteredByName(filter: string) {
    return this.httpClient.get(this.basePath + '?name=' + filter);
  }

  getCharactersFiltered(filter: {
    status: string[];
    species: string[];
    gender: string[];
  }) {
    let query = '';

    if (filter.status.length > 0) {
      filter.status.forEach((status) => {
        query += 'status=' + status.toLowerCase() + '&';
      });
    }
    if (filter.species.length > 0) {
      filter.species.forEach((specie) => {
        query += 'species=' + specie.toLowerCase() + '&';
      });
    }
    if (filter.gender.length > 0) {
      filter.gender.forEach((gender) => {
        query += 'gender=' + gender.toLowerCase() + '&';
      });
    }
    return this.httpClient.get(this.basePath + '?' + query);
  }

  updateSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}
