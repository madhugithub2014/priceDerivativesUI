import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteCarloSimulationComponent } from './monte-carlo-simulation.component';

describe('MonteCarloSimulationComponent', () => {
  let component: MonteCarloSimulationComponent;
  let fixture: ComponentFixture<MonteCarloSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonteCarloSimulationComponent]
    });
    fixture = TestBed.createComponent(MonteCarloSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
