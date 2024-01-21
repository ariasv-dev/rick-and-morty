import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersService } from 'src/app/shared/services/characters.service';
import {
  CharacterObject,
  CharacterResponse,
} from 'src/app/shared/interfaces/character';

/*** PRIMENG IMPORTS ***/
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DataViewModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent {
  public characters: CharacterObject[] = [];
  public randomCharacters: CharacterObject[] = [];
  public favCharacters: any[] = [];
  public characterEpisodes: any[] = [];
  public characterDetails: CharacterObject = {};
  public totalRecords: number | undefined = 0;
  public showDetails: boolean = false;
  public noResults: boolean = false;

  private ngUnsubscribe = new Subject<void>();

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService
      .getCharacters()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res: CharacterResponse) => {
          !res.results
            ? false
            : ((this.characters = res.results),
              (this.totalRecords = res.info?.count));
        },
        complete: () => {
          this.getRandomCharacters(2);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  handleFavoriteChanged(favoriteCharacter: any | null) {
    if (favoriteCharacter.fav) {
      this.favCharacters.push(favoriteCharacter);
    } else {
      this.favCharacters = this.favCharacters.filter(
        (favChar) => favChar.id !== favoriteCharacter.id
      );
    }
  }

  handleFavFilterChanged($event: any) {
    if ($event) {
      this.characters = this.favCharacters;
      !this.characters ? (this.noResults = true) : (this.noResults = false);
    } else {
      this.charactersService
        .getCharacters()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: (res: any) => {
            !res.results
              ? false
              : ((this.characters = res.results),
                (this.totalRecords = res.info?.count));
          },
          error: (err) => {
            console.error(err);
          },
        });
    }
  }

  handleGenderFilterChanged($event: string) {
    let filterValue = $event;
    this.charactersService
      .getCharactersFilteredByGender(filterValue)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res: any) => {
          !res.results ? (this.noResults = true) : (this.noResults = false);

          this.characters = res.results;
          this.totalRecords = res.info?.count;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  handleSearchResult($event: any) {
    let searchResult = $event;
    searchResult.length > 0
      ? ((this.noResults = false),
        ((this.characters = $event), (this.totalRecords = searchResult.length)))
      : ((this.noResults = true), (this.totalRecords = 0));
  }

  handleShowDetails($event: any) {
    this.characterEpisodes = [];
    this.characterDetails = $event;
    let episodesShort: string[];

    if (this.characterDetails.episode) {
      if (this.characterDetails.episode.length > 5) {
        episodesShort = this.characterDetails.episode?.splice(0, 5);
      } else {
        episodesShort = this.characterDetails.episode;
      }

      episodesShort.forEach((item) => {
        let match = item ? item.match(/\/episode\/(\d+)/) : null;

        let episode = match ? parseInt(match[1]) : null;

        this.characterEpisodes = [...this.characterEpisodes, episode];
      });
    }

    this.showDetails = true;
  }

  getRandomCharacters(count: number): void {
    const randomIndexes: number[] = [];
    const result: any[] = [];

    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * this.characters.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        result.push(this.characters[randomIndex]);
      }
    }
    this.randomCharacters = result;
  }

  deleteFilters() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
