import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-nouveau',
  templateUrl: './produit-nouveau.component.html',
  styleUrls: ['./produit-nouveau.component.css']
})


export class ProduitNouveauComponent implements OnInit {
  
  produit!: Produit;
  formNouveauProduit!: FormGroup;
  
  constructor(
    private location: Location,
    private produitService: ProduitService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formNouveauProduit = this.formBuilder.group({
      nom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      quantite: ['', [
        Validators.required,
        Validators.min(0)
      ]]
    });
  }

  ajouterProduit(): void {
    if (this.formNouveauProduit.invalid) {
      alert('Formulaire non valide, tous les champs sont requis pour valider l\'ajout d\'un produit');
      return;
    }
    this.produitService.ajouterProduit(this.formNouveauProduit.value as Produit )
      .subscribe(produit => {
          this.produit = produit; 
          this.retour();
        })
  }
  
  retour(): void {
    this.location.back();
  }

}
