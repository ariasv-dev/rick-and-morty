import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent, CharactersListComponent],
  exports: [HomeComponent, CharactersListComponent],
})
export class PagesModule {}
