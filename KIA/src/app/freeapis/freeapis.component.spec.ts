import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeapisComponent } from './freeapis.component';

describe('FreeapisComponent', () => {
  let component: FreeapisComponent;
  let fixture: ComponentFixture<FreeapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
