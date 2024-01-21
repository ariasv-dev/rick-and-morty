import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CharacterObject } from '../../interfaces/character';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() searchResult = new EventEmitter<CharacterObject[]>();

  public filters: string[] = [];

  handleFilters(filters: any) {
    this.filters = [];
    if (filters.status.length > 0) {
      filters.status.forEach((status: string) => {
        this.filters.push(status);
      });
    }
    if (filters.species.length > 0) {
      filters.species.forEach((specie: string) => {
        this.filters.push(specie);
      });
    }
    if (filters.gender.length > 0) {
      filters.gender.forEach((gender: string) => {
        this.filters.push(gender);
      });
    }
  }

  handleSearchResult(result: any) {
    this.searchResult.emit(result);
  }
}
