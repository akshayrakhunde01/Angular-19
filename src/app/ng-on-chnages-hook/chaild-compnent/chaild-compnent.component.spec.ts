import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildCompnentComponent } from './chaild-compnent.component';

describe('ChaildCompnentComponent', () => {
  let component: ChaildCompnentComponent;
  let fixture: ComponentFixture<ChaildCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaildCompnentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaildCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
