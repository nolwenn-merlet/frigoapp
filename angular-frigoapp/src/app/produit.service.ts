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
        catchError(this.handleError<Produit>(`getHero id=${id}`)),
      );
  }

  

  rechercherProduit(term: string): Observable<Produit[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Produit[]>(`${this.produitsUrl}/?name=${term}`)
    .pipe(
      catchError(this.handleError<Produit[]>('rechercherProduits', []))
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
    return this.http.put(this.produitsUrl, produit, this.httpOptions)
      .pipe(
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
