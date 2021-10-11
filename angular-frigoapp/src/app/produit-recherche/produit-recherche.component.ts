import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-recherche',
  templateUrl: './produit-recherche.component.html',
  styleUrls: ['./produit-recherche.component.css']
})
export class ProduitRechercheComponent implements OnInit {

  produit!: Produit;
  formRecherche!: FormGroup;

  constructor(
    private produitService: ProduitService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formRecherche = this.formBuilder.group({
      nom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });  
  }

  rechercher(): void {
    if(this.formRecherche.invalid){
      alert("Cette recherche n'est pas valide");
      return;
    }

    this.produitService.rechercherProduit(this.formRecherche.value as Produit)
      .subscribe(produit => {
        this.produit = produit[0] ;
        console.log('produit', this.produit);

        (this.produit == null) ? alert("Ce produit n'existe pas") : this.router.navigateByUrl('/detail/'+this.produit.id);
        
      });
  }

  viderInput(): void {
    this.formRecherche.reset();
  }
}
