import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewControlFlowComponent } from './new-control-flow.component';

describe('NewControlFlowComponent', () => {
  let component: NewControlFlowComponent;
  let fixture: ComponentFixture<NewControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
