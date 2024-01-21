import { Routes } from '@angular/router';

import { SignalComponent } from './components/signal/signal.component';
import { NewControlFlowComponent } from './components/new-control-flow/new-control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { HomeComponent } from './components/home/home.component';
import { ViewTransitionApiComponent } from './components/view-transition-api/view-transition-api.component';
import { ContactComponent } from './shared/contact/contact.component';

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
    path: 'view-transition-api',
    component: ViewTransitionApiComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
