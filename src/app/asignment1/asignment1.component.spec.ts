import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignment1Component } from './asignment1.component';

describe('Asignment1Component', () => {
  let component: Asignment1Component;
  let fixture: ComponentFixture<Asignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asignment1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
