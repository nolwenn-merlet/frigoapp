import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  produit: Produit = {
    id: 1,
    nomProduit: 'Tomate',
    quantite: 6
  }
  constructor() { }

  ngOnInit(): void {
  }

}
