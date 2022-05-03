import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitHeaderComponent } from './bit-header.component';

describe('BitHeaderComponent', () => {
  let component: BitHeaderComponent;
  let fixture: ComponentFixture<BitHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
