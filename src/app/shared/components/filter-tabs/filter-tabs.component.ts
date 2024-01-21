import { Component, EventEmitter, Input, Output } from '@angular/core';

/*** PRIMENG IMPORTS ***/
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-filter-tabs',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.scss',
})
export class FilterTabsComponent {
  @Input() activeIndex: number = 0;
  @Output() selectedFilter = new EventEmitter<string>();

  public filter: string = 'all';

  constructor() {}

  ngOnInit() {
    this.filter = this.getFilterValue();
  }

  onTabChanges($event: any) {
    this.activeIndex = $event.index;
    this.filter = this.getFilterValue();
    this.selectedFilter.emit(this.filter);
  }

  getFilterValue(): string {
    switch (this.activeIndex) {
      case 1:
        return 'unknown';
      case 2:
        return 'female';
      case 3:
        return 'male';
      case 4:
        return 'genderless';
      default:
        return '';
    }
  }
}
