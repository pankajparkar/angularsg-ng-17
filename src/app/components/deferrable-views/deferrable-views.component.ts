import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalComponent } from '../signal/signal.component';

@Component({
  selector: 'af-deferrable-views',
  standalone: true,
  imports: [SignalComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  isVisible = signal(false);
}
