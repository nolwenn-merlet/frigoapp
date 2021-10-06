import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produit-nouveau',
  templateUrl: './produit-nouveau.component.html',
  styleUrls: ['./produit-nouveau.component.css']
})


export class ProduitNouveauComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }


  ajouterProduit(): void {
  }
  
  
  retour(): void {
    this.location.back();
  }

}
