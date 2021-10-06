import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitNouveauComponent } from './produit-nouveau/produit-nouveau.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  { path: '', redirectTo: 'pagePrincipale', pathMatch: 'full'},
  { path: 'pagePrincipale', component: PagePrincipaleComponent},
  { path: 'produits', component: ProduitsComponent},
  { path: 'detail/:id', component: ProduitDetailComponent},
  { path: 'nouveau', component:ProduitNouveauComponent}
];


@NgModule({
  declarations: [],

  imports: [ 
    RouterModule.forRoot(routes)
  ],

  exports: [ 
    RouterModule 
  ]
})


export class AppRoutingModule { }



/*--Note---------------------------------------------------
  The app-routing.module.ts file needs to import RouterModule and Routes so the application can have routing functionality. 
  The next import(s) will give the Router somewhere to go once we configure the routes.

  Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
  A typical Angular Route has two properties:
  •	path: a string that matches the URL in the browser address bar.
  •	component: the component that the router should create when navigating to this route.
  This tells the router to match that URL to path: 'xxx' and display the xxxComponent when the URL is something like localhost:4200/xxx.

  The @NgModule metadata initializes the router and starts it listening for browser location changes.
    > We then add the RouterModule to the AppRoutingModule imports array AND configures it with the routes in one step 
    by calling RouterModule.forRoot():
        imports: [RouterModule.forRoot(routes)]
      > The method is called forRoot() because we configure the router at the application's root level. 
      The forRoot() method supplies the service providers and directives needed for routing, and performs 
      the initial navigation based on the current browser URL.
    > Next, AppRoutingModule exports RouterModule so it will be available throughout the application:
        exports: [ RouterModule ]
  
  We next have to add RouterOutlet in the AppComponent template
    > The <router-outlet> tells the router where to display routed views.
    > The RouterOutlet is one of the router directives that became available to the AppComponent because 
    AppModule imports AppRoutingModule which exported RouterModule. 
    The ng generate command we ran when starting the project added this import because of the --module=app flag. 
    If we manually created app-routing.module.ts or used a tool other than the CLI to do so, ww'll need to import 
    AppRoutingModule into app.module.ts and add it to the imports array of the NgModule.

  ---------------------------------------------------------*/