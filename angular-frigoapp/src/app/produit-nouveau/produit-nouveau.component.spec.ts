import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitNouveauComponent } from './produit-nouveau.component';

describe('ProduitNouveauComponent', () => {
  let component: ProduitNouveauComponent;
  let fixture: ComponentFixture<ProduitNouveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitNouveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitNouveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
