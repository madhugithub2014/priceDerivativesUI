import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DerivativePriceComponent } from './components/derivative-price/derivative-price.component';
import { MonteCarloSimulationComponent } from './components/monte-carlo-simulation/monte-carlo-simulation.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'derivativePrice', component: DerivativePriceComponent },
  { path: 'monteCarloSimulation', component: MonteCarloSimulationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
