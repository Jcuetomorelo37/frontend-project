import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxcompComponent } from './comboboxcomp.component';

describe('ComboboxcompComponent', () => {
  let component: ComboboxcompComponent;
  let fixture: ComponentFixture<ComboboxcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboboxcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
