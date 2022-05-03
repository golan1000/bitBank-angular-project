import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitMovesListComponent } from './bit-moves-list.component';

describe('BitMovesListComponent', () => {
  let component: BitMovesListComponent;
  let fixture: ComponentFixture<BitMovesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitMovesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitMovesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
