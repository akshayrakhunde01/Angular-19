import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPortfolioComponent } from './small-portfolio.component';

describe('SmallPortfolioComponent', () => {
  let component: SmallPortfolioComponent;
  let fixture: ComponentFixture<SmallPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
