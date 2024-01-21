import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-favorites',
  standalone: true,
  imports: [],
  templateUrl: './filter-favorites.component.html',
  styleUrl: './filter-favorites.component.scss',
})
export class FilterFavoritesComponent {
  @Output() filterByFav = new EventEmitter<boolean>();

  public isFiltered: boolean = false;

  constructor() {}

  filterByFavorites() {
    this.isFiltered = !this.isFiltered;
    this.filterByFav.emit(this.isFiltered);
  }
}
