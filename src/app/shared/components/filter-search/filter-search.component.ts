import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/***PRIMENG IMPORTS ***/
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-filter-search',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.scss',
})
export class FilterSearchComponent {
  @Input() isVisible: boolean = false;
  @Output() filterBy = new EventEmitter<any>();

  public statusList: string[] = ['Alive', 'Dead', 'Unknown'];
  public genderList: string[] = ['Male', 'Female', 'Genderless', 'Unknown'];
  public speciesList: string[] = [
    'Human',
    'Alien',
    'Humanoid',
    'Animal',
    'Unknown',
  ];

  public selectedStatus: string[] = [];
  public selectedSpecies: string[] = [];
  public selectedGender: string[] = [];

  applyFilters() {
    let filters = {
      status: this.selectedStatus,
      species: this.selectedSpecies,
      gender: this.selectedGender,
    };

    this.filterBy.emit(filters);
    this.isVisible = false;
  }
}
