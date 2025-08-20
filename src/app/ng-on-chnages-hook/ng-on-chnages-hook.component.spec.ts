import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChnagesHookComponent } from './ng-on-chnages-hook.component';

describe('NgOnChnagesHookComponent', () => {
  let component: NgOnChnagesHookComponent;
  let fixture: ComponentFixture<NgOnChnagesHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnChnagesHookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChnagesHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
