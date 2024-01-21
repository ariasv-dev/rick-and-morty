import { Component, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { CharacterObject } from '../../interfaces/character';

/*** PRIMENG IMPORTS ***/
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [CommonModule, CardModule, AvatarModule, ButtonModule, BadgeModule],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
  @Input() character: any = {};
  @Output() favoriteChanged = new EventEmitter<any>();
  @Output() showCharacterDetails = new EventEmitter<any>();

  public isFavorite: boolean = false;
  public isAlive: boolean = false;
  public episodeName: string | undefined = '';
  public episodeNumber: number | null = null;
  public favCharacters: any[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    let match = this.character?.episode?.[0]
      ? this.character?.episode?.[0].match(/\/episode\/(\d+)/)
      : null;
    this.episodeNumber = match ? parseInt(match[1]) : null;

    if (this.episodeNumber) {
      this.getEpisodeName();
    }

    this.character.status === 'Alive'
      ? (this.isAlive = true)
      : (this.isAlive = false);
  }

  getEpisodeName() {
    this.charactersService
      .getEpisode(this.episodeNumber)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.episodeName = res.name;
      });
  }

  toggleFavorite(selectedCharacter: any) {
    this.isFavorite = !this.isFavorite;

    selectedCharacter.fav = this.isFavorite;

    this.favoriteChanged.emit(selectedCharacter);
  }

  showDetails(character: CharacterObject) {
    this.showCharacterDetails.emit(character);
  }
}
