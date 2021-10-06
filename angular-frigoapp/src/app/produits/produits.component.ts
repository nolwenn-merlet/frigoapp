import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { PRODUITS } from '../mock-produits';
import { Location } from '@angular/common';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})


export class ProduitsComponent implements OnInit {

  produits = PRODUITS ; //Pour recuperer les donnees fictives

  constructor(
    private location: Location

  ) { }

  ngOnInit(): void {
  }

  retour(): void {
    this.location.back();
  }
}
