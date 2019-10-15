import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueGridComponent } from './clue-grid.component';

describe('ClueGridComponent', () => {
  let component: ClueGridComponent;
  let fixture: ComponentFixture<ClueGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClueGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
