import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPortfolioComponent } from './modal-edit-portfolio.component';

describe('ModalEditPortfolioComponent', () => {
  let component: ModalEditPortfolioComponent;
  let fixture: ComponentFixture<ModalEditPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
