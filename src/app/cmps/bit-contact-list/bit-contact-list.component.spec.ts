import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitContactListComponent } from './bit-contact-list.component';

describe('BitContactListComponent', () => {
  let component: BitContactListComponent;
  let fixture: ComponentFixture<BitContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
