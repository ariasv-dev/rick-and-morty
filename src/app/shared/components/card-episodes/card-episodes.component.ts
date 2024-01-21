import { Component, Input } from '@angular/core';

/*** PRIMENG IMPORTS ***/
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-episodes',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card-episodes.component.html',
  styleUrl: './card-episodes.component.scss',
})
export class CardEpisodesComponent {
  @Input() name: string = '';
  @Input() episode: any;
  @Input() date: any;
}
