import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-recherche',
  templateUrl: './produit-recherche.component.html',
  styleUrls: ['./produit-recherche.component.css']
})
export class ProduitRechercheComponent implements OnInit {

  produit!: Produit;
  recherche!: FormGroup;

  constructor(
    private produitService: ProduitService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.recherche = this.formBuilder.group({
      nom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  rechercher(): void {
    if(this.recherche.invalid){
      alert("Cette recherche n'est pas valide");
      return ;
    }

    this.produitService.rechercherProduit(this.recherche.value as Produit)
      .subscribe(produit => {
        this.produit = produit;
        console.log("this.produit : ", this.produit);
      
      })   
  } 
}
