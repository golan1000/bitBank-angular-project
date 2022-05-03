import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitPreviewComponent } from './bit-preview.component';

describe('BitPreviewComponent', () => {
  let component: BitPreviewComponent;
  let fixture: ComponentFixture<BitPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
