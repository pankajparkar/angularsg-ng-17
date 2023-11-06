import { Component, computed, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'af-signal',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  firstName = signal('Pankaj')
  lastName = signal('Parkar')
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => {
      console.log('FirstName changed', this.firstName());
    });

    effect(() => {
      console.log('LastName changed', this.lastName());
    });
  }

  updateFirstName() {
    // this.firstName.set('Pankaj 1');
    this.firstName.update((name) => name + 1)
    // this.firstName.update(() => 'Pankaj 1')
  }


}
