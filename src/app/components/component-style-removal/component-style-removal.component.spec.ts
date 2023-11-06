import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleRemovalComponent } from './component-style-removal.component';

describe('ComponentStyleRemovalComponent', () => {
  let component: ComponentStyleRemovalComponent;
  let fixture: ComponentFixture<ComponentStyleRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentStyleRemovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentStyleRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
