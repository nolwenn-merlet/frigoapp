import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitRechercheComponent } from './produit-recherche/produit-recherche.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
