import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostProductAddComponent } from './most-product-add.component';

describe('MostProductAddComponent', () => {
  let component: MostProductAddComponent;
  let fixture: ComponentFixture<MostProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostProductAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
