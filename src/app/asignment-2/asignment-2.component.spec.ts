import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignment2Component } from './asignment-2.component';

describe('Asignment2Component', () => {
  let component: Asignment2Component;
  let fixture: ComponentFixture<Asignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asignment2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
