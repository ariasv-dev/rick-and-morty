import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** CUSTOM COMPONENTS ***/
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { FilterTabsComponent } from './components/filter-tabs/filter-tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { PopUpDetailsComponent } from './components/pop-up-details/pop-up-details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';
import { CardEpisodesComponent } from './components/card-episodes/card-episodes.component';
import { FilterFavoritesComponent } from './components/filter-favorites/filter-favorites.component';

/*** PRIMENG IMPORTS ***/
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardCharacterComponent,
    FilterSearchComponent,
    FilterTabsComponent,
    HeaderComponent,
    PopUpDetailsComponent,
    SearchBarComponent,
    FilterFavoritesComponent,
    FooterComponent,
    CharacterInformationComponent,
    CardEpisodesComponent,
  ],
  exports: [
    ButtonModule,
    CardCharacterComponent,
    FilterSearchComponent,
    FilterTabsComponent,
    HeaderComponent,
    PopUpDetailsComponent,
    SearchBarComponent,
    FilterFavoritesComponent,
    FooterComponent,
    CharacterInformationComponent,
    CardEpisodesComponent,
  ],
})
export class SharedModule {}
