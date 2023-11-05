import { Routes } from '@angular/router';

import { SignalComponent } from './components/signal/signal.component';
import { NewControlFlowComponent } from './components/new-control-flow/new-control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'new-control-flow',
    component: NewControlFlowComponent,
  },
  {
    path: 'deferrable-views',
    component: DeferrableViewsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
