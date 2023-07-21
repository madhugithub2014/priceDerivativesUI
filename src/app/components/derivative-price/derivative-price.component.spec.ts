import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativePriceComponent } from './derivative-price.component';

describe('DerivativePriceComponent', () => {
  let component: DerivativePriceComponent;
  let fixture: ComponentFixture<DerivativePriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerivativePriceComponent]
    });
    fixture = TestBed.createComponent(DerivativePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
