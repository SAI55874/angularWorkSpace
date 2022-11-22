import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableInfoComponent } from './product-table-info.component';

describe('ProductTableInfoComponent', () => {
  let component: ProductTableInfoComponent;
  let fixture: ComponentFixture<ProductTableInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTableInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
