import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitStatisticsComponent } from './bit-statistics.component';

describe('BitStatisticsComponent', () => {
  let component: BitStatisticsComponent;
  let fixture: ComponentFixture<BitStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
