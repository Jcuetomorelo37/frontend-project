import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkProductsComponent } from './talkproducts.component';

describe('TalkProductsComponent', () => {
  let component: TalkProductsComponent;
  let fixture: ComponentFixture<TalkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
