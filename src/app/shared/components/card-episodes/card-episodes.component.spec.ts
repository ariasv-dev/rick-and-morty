import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpisodesComponent } from './card-episodes.component';
import { HttpClientModule } from '@angular/common/http';

describe('CardEpisodesComponent', () => {
  let component: CardEpisodesComponent;
  let fixture: ComponentFixture<CardEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEpisodesComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
