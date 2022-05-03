import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitContactDetailsComponent } from './bit-contact-details.component';

describe('BitContactDetailsComponent', () => {
  let component: BitContactDetailsComponent;
  let fixture: ComponentFixture<BitContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
