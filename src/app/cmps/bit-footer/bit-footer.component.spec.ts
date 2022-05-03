import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitFooterComponent } from './bit-footer.component';

describe('BitFooterComponent', () => {
  let component: BitFooterComponent;
  let fixture: ComponentFixture<BitFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
