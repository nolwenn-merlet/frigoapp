import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-nouveau',
  templateUrl: './produit-nouveau.component.html',
  styleUrls: ['./produit-nouveau.component.css']
})


export class ProduitNouveauComponent implements OnInit {

  formNouveauProduit = new FormGroup({
    nomNouveauProduit: new FormControl(),
    quantiteNouveauProduit: new FormControl(),
  });

  produit!: Produit;


  constructor(
    private location: Location,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
  }

  getNomNouveauProduit(): string {
    return String(this.formNouveauProduit.get('nomNouveauProduit'));
  }

  getQuantiteNouveauProduit(): number {
    return Number(this.formNouveauProduit.get('quantiteNouveauProduit'));
  }

  ajouterProduit(): void {
    if(this.getNomNouveauProduit().length == 0 || !this.getQuantiteNouveauProduit()){
       return; 
    }

    this.produitService.ajouterProduit(this.formNouveauProduit as unknown as Produit )
      .subscribe(produit => this.produit = produit);
  }
  

  
  retour(): void {
    this.location.back();
  }

}
