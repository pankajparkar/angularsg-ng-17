import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionApiComponent } from './view-transition-api.component';

describe('ViewTransitionApiComponent', () => {
  let component: ViewTransitionApiComponent;
  let fixture: ComponentFixture<ViewTransitionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransitionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
