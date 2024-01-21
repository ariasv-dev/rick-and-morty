import { Component, Input } from '@angular/core';

/*** PRIMENG IMPORTS ***/
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-character-information',
  standalone: true,
  imports: [CardModule],
  templateUrl: './character-information.component.html',
  styleUrl: './character-information.component.scss',
})
export class CharacterInformationComponent {
  @Input() cardTitle: string = '';
  @Input() cardInfo: any;
}
