import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosaaComponent } from './serviciosaa.component';

describe('ServiciosaaComponent', () => {
  let component: ServiciosaaComponent;
  let fixture: ComponentFixture<ServiciosaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosaaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
