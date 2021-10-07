import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Produit } from '../produit';
import { PRODUITS } from '../mock-produits';
import { ProduitService } from '../produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})


export class ProduitsComponent implements OnInit {

  produits: Produit[] = []; 

  constructor(
    private location: Location,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getProduits()
      .subscribe( produits => this.produits = produits);
  }

  retour(): void {
    this.location.back();
  }
}
