import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchFet19Component } from './switch-fet-19.component';

describe('SwitchFet19Component', () => {
  let component: SwitchFet19Component;
  let fixture: ComponentFixture<SwitchFet19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchFet19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchFet19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
