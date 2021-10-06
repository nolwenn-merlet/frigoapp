import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitRechercheComponent } from './produit-recherche/produit-recherche.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProduitNouveauComponent } from './produit-nouveau/produit-nouveau.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitDetailComponent,
    ProduitRechercheComponent,
    PagePrincipaleComponent,
    ProduitNouveauComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
