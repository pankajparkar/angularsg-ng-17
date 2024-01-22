import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCardComponent } from '../price-card/price-card.component';

@Component({
  selector: 'af-price-grid',
  standalone: true,
  imports: [CommonModule, PriceCardComponent],
  templateUrl: './price-grid.component.html',
  styleUrl: './price-grid.component.scss'
})
export class PriceGridComponent {

}
