import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCarouselComponent } from './filterCarousel.component';

describe('FilterCarouselComponent', () => {
  let component: FilterCarouselComponent;
  let fixture: ComponentFixture<FilterCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
