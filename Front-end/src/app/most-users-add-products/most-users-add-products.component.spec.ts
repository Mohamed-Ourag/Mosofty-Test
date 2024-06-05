import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsersAddProductsComponent } from './most-users-add-products.component';

describe('MostUsersAddProductsComponent', () => {
  let component: MostUsersAddProductsComponent;
  let fixture: ComponentFixture<MostUsersAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostUsersAddProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostUsersAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
