import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruDirectiveComponent } from './stru-directive.component';

describe('StruDirectiveComponent', () => {
  let component: StruDirectiveComponent;
  let fixture: ComponentFixture<StruDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StruDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StruDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
