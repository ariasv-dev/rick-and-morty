import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { CharacterObject, CharacterResponse } from '../../interfaces/character';
import { FilterSearchComponent } from '../filter-search/filter-search.component';

/*** PRIMENG IMPORTS ***/
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    FilterSearchComponent,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() searchTermResult = new EventEmitter<CharacterResponse[]>();
  @Output() filtersApplied = new EventEmitter<any>();

  public searchTerm: string = '';
  public characters: CharacterObject[] = [];
  public filteredCharacters: CharacterResponse[] = [];
  public isVisible: boolean = false;
  public filterBy: any = {};

  private ngUnsubscribe = new Subject<void>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    // Subscribe to the search term changes
    this.searchService.searchTerm$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
    });
  }

  onSearchInput() {
    this.searchService.updateSearchTerm(this.searchTerm.toLowerCase());
    this.searchCharacters();
  }

  searchCharacters() {
    this.searchService
      .getCharactersFilteredByName(this.searchTerm.toLowerCase())
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.filteredCharacters = res.results;

        this.searchTermResult.emit(this.filteredCharacters);
      });
  }

  showFilter() {
    this.isVisible = !this.isVisible;
  }

  handleFilters($event: any) {
    this.filterBy = $event;

    this.searchService
      .getCharactersFiltered(this.filterBy)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.filteredCharacters = res.results;
        this.filtersApplied.emit(this.filterBy);
        this.searchTermResult.emit(this.filteredCharacters);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
