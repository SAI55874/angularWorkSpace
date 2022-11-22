import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppimgComponent } from './shoppimg.component';

describe('ShoppimgComponent', () => {
  let component: ShoppimgComponent;
  let fixture: ComponentFixture<ShoppimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
