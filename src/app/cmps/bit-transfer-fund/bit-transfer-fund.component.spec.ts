import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTransferFundComponent } from './bit-transfer-fund.component';

describe('BitTransferFundComponent', () => {
  let component: BitTransferFundComponent;
  let fixture: ComponentFixture<BitTransferFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitTransferFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitTransferFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
