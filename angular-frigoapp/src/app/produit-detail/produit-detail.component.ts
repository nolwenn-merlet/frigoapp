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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produitService.getProduit(id)
      .subscribe(produit => this.produit = produit);
  }

  supprimerProduit(){
    //A implementer
  }


  retour(): void {
    this.location.back();
  }


}
