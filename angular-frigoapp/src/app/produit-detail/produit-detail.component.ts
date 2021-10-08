import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  produit: Produit | undefined;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(): void {
    this.produitService.getProduit(this.id)
      .subscribe(produit => this.produit = produit);
  }

  supprimerProduit(){
    this.produitService.supprimerProduit(this.id)
      .subscribe(() => this.retour());
  }


  modifierProduit(){
    // A implementer
  }

  retour(): void {
    this.location.back();
  }


}
