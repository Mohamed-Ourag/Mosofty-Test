import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitEaddComponent } from './produit-eadd.component';

describe('ProduitEaddComponent', () => {
  let component: ProduitEaddComponent;
  let fixture: ComponentFixture<ProduitEaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitEaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitEaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
