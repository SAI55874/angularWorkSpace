import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsinchargeComponent } from './bsincharge.component';

describe('BsinchargeComponent', () => {
  let component: BsinchargeComponent;
  let fixture: ComponentFixture<BsinchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsinchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsinchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
