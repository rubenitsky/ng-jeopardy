import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintCardComponent } from './hint-card.component';

describe('HintCardComponent', () => {
  let component: HintCardComponent;
  let fixture: ComponentFixture<HintCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
