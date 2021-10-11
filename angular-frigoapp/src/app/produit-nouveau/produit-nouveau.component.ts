import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-nouveau',
  templateUrl: './produit-nouveau.component.html',
  styleUrls: ['./produit-nouveau.component.css']
})


export class ProduitNouveauComponent implements OnInit {
  
  produit!: Produit;
  formNouveauProduit!: FormGroup;
  id: number | undefined;
  produitExiste: boolean = false;
  
  constructor(
    private location: Location,
    private produitService: ProduitService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formNouveauProduit = this.formBuilder.group({
      nom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      quantite: ['', [
        Validators.required,
        Validators.min(1)
      ]]
    });
  }

  rechercher(): void {
    this.produitService.rechercherProduit(this.formNouveauProduit.value as Produit)
      .subscribe(produit => {
        this.produit = produit[0] ;
        console.log('produit', this.produit);

        if (this.produit !== null) {
            alert("Ce produit existe deja");
            this.router.navigateByUrl('/detail/'+this.produit.id) ; 
          }
        else {
          this.ajouterProduit();
        }
      });
  }

  ajouterProduit(): void {
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
