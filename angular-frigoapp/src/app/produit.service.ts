import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Produit } from './produit';
import { ProduitNouveauComponent } from './produit-nouveau/produit-nouveau.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private http: HttpClient,
  ) { }

  private produitsUrl = 'http://localhost:8080/produits';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    /** GET produits from the server */
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitsUrl)
      .pipe(
        catchError(this.handleError<Produit[]>('getProduits', []))
      );
  }

  getProduit(id: number): Observable<Produit> {
    const url = `${this.produitsUrl}/${id}`;
    return this.http.get<Produit>(url)
      .pipe(
        catchError(this.handleError<Produit>(`getProduit id=${id}`))
      );
  }



  rechercherProduit(produit: Produit): Observable<Produit[]> {
    const url = `${this.produitsUrl}/?nom=${produit.nom}`;
    return this.http.get<Produit[]>(url)
    .pipe(
      catchError(this.handleError<Produit[]>(`rechercherProduit nom=${produit.nom}`))
    );
  }


  //////// Save methods //////////

  /** POST: ajoute un nouveau produit au serveur */
  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.produitsUrl, produit, this.httpOptions)
    .pipe(
      catchError(this.handleError<Produit>('ajouterProduit'))
    );
  }
  
  /** DELETE: supprimer un produit du serveur */
  supprimerProduit(id: number): Observable<Produit> {
    const url = `${this.produitsUrl}/${id}`;

    return this.http.delete<Produit>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<Produit>('supprimerProduit'))
    );
  }

  /** PUT: Mise-a-jour d'un produit sur le serveur */
  updateProduit(produit: Produit): Observable<any> {
    const url = `${this.produitsUrl}/${produit.id}`;

    return this.http.put(url, produit, this.httpOptions)
      .pipe(
        tap(_ => console.log(`mise-a-jour du produit id# ${produit.id}`)),
        catchError(this.handleError<any>('updateProduit'))
      );
  }



  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log("erreur:" + error); // log to console instead
/*
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
*/
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
