import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitRechercheComponent } from './produit-recherche.component';

describe('ProduitRechercheComponent', () => {
  let component: ProduitRechercheComponent;
  let fixture: ComponentFixture<ProduitRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
