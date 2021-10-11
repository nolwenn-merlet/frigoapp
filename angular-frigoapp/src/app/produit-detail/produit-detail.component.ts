import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  produit: Produit | undefined;
  id = Number(this.route.snapshot.paramMap.get('id'));

  formModifProduit: FormGroup =  this.formBuilder.group({
    id: [this.id, [
    ]],
    quantite: ['', [
      Validators.required,
      Validators.min(1),
      Validators.pattern("^[0-9]*$")
    ]]
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private produitService: ProduitService,
    private formBuilder: FormBuilder
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

  modifierProduit(): void {
    if(this.formModifProduit.invalid){
      alert("Cette quantite n'est pas valide");
      return;
    }

    this.produitService.updateProduit(this.formModifProduit.value as Produit)
      .subscribe(produit => {
        this.produit = produit ;
        console.log('produit', this.produit);

        (this.produit == null) ? alert("Ce produit n'existe pas") : this.router.navigateByUrl('/produits');
        
      });
  }

  
  retour(): void {
    this.location.back();
  }


}
