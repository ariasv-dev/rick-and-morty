import { Component, Input } from '@angular/core';
import { CharacterObject } from '../../interfaces/character';
import { CharacterInformationComponent } from '../character-information/character-information.component';
import { CardEpisodesComponent } from '../card-episodes/card-episodes.component';
import { EpisodesService } from '../../services/episodes.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*** PRIMENG IMPORTS ***/
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { CardCharacterComponent } from '../card-character/card-character.component';

@Component({
  selector: 'app-pop-up-details',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    CharacterInformationComponent,
    DividerModule,
    CardEpisodesComponent,
    CommonModule,
    FormsModule,
    CardCharacterComponent,
  ],
  templateUrl: './pop-up-details.component.html',
  styleUrl: './pop-up-details.component.scss',
})
export class PopUpDetailsComponent {
  @Input() isVisible: boolean = false;
  @Input() character: CharacterObject = {};
  @Input() episodes: number[] = [];
  @Input() randomCharacters: CharacterObject[] = [];

  public episodesInfo: any[] = [];

  constructor(private episodesService: EpisodesService) {}

  ngOnInit() {
    if (this.episodes) {
      this.getEpisodesInfo();
    }
  }

  getEpisodesInfo() {
    this.episodesService
      .getCharacterEpisodesInfo(this.episodes)
      .pipe(take(1))
      .subscribe({
        next: (res: any) => {
          this.episodesInfo = res.results;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
