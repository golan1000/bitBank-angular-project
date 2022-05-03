import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitContactFilterComponent } from './bit-contact-filter.component';

describe('BitContactFilterComponent', () => {
  let component: BitContactFilterComponent;
  let fixture: ComponentFixture<BitContactFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitContactFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitContactFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
