import { Component, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

type Item = { id: number, name: string };

const collection = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
] as Item[];


@Component({
  selector: 'af-new-control-flow',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './new-control-flow.component.html',
  styleUrl: './new-control-flow.component.scss'
})
export class NewControlFlowComponent {
  isChecked = signal(false);
  collection = collection as Item[];
  selectedValue = signal<number | null>(null);
  radioValues = [
    { id: 1, displayName: 'First' },
    { id: 2, displayName: 'Second' },
    { id: 3, displayName: 'Third' },
    { id: 4, displayName: 'Forth' },
  ]
}
