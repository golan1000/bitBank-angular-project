import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitContactEditComponent } from './bit-contact-edit.component';

describe('BitContactEditComponent', () => {
  let component: BitContactEditComponent;
  let fixture: ComponentFixture<BitContactEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitContactEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
