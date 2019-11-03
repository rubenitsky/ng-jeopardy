import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantEntryComponent } from './contestant-entry.component';

describe('ContestantEntryComponent', () => {
  let component: ContestantEntryComponent;
  let fixture: ComponentFixture<ContestantEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
