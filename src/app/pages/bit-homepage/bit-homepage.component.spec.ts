import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitHomepageComponent } from './bit-homepage.component';

describe('BitHomepageComponent', () => {
  let component: BitHomepageComponent;
  let fixture: ComponentFixture<BitHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
