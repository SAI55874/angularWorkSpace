import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsdetailsComponent } from './bsdetails.component';

describe('BsdetailsComponent', () => {
  let component: BsdetailsComponent;
  let fixture: ComponentFixture<BsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
