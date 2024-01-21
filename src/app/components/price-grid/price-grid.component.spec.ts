import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceGridComponent } from './price-grid.component';

describe('PriceGridComponent', () => {
  let component: PriceGridComponent;
  let fixture: ComponentFixture<PriceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
