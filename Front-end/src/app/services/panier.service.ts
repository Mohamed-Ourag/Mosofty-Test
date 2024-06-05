import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../models/panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://localhost:8091/api/panier';

  constructor(private http: HttpClient) { }

  addProductToPanier(userId: number, produitId: number): Observable<Panier> {
    return this.http.post<Panier>(`${this.apiUrl}/add`, { userId, produitId });
  }

  removeProductFromPanier(panierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${panierId}`);
  }

  getPanierByUser(userId: number): Observable<Panier[]> {
    return this.http.get<Panier[]>(`${this.apiUrl}/user/${userId}`);
  }
}
