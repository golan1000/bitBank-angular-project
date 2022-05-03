import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitContactsComponent } from './bit-contacts.component';

describe('BitContactsComponent', () => {
  let component: BitContactsComponent;
  let fixture: ComponentFixture<BitContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
