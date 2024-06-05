import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';
import { Router } from "@angular/router";
import { PanierService } from '../services/panier.service';
import { AuthService } from '../services/auth.service';
import { Panier } from '../models/panier.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource = new MatTableDataSource<Produit>();
  panierProduits: Set<number> = new Set();
  panierMap: Map<number, number> = new Map();

  constructor(
    private produitService: ProduitService,
    private router: Router,
    private panierService: PanierService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadProduits();
    this.loadPanier();
  }

  loadProduits(): void {
    this.produitService.getProduits().subscribe((data: Produit[]) => {
      this.dataSource.data = data;
    });
  }

  loadPanier(): void {
    const userId = this.authService.getCurrentUser().id;
    this.panierService.getPanierByUser(userId).subscribe((paniers: Panier[]) => {
      this.panierProduits = new Set(paniers.map(p => p.produit.id!));
      paniers.forEach(p => this.panierMap.set(p.produit.id!, p.id!));
    });
  }

  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(produit => produit.id !== id);
    });
  }

  navigate(): void {
    this.router.navigate(['/admin/produits/add']);
  }

  addOrRemoveFromPanier(produit: Produit): void {
    const userId = this.authService.getCurrentUser().id;
    if (this.panierProduits.has(produit.id!)) {
      const panierId = this.getPanierIdByProduit(produit.id!);
      this.panierService.removeProductFromPanier(panierId).subscribe(() => {
        this.panierProduits.delete(produit.id!);
        this.panierMap.delete(produit.id!);
      });
    } else {
      this.panierService.addProductToPanier(userId, produit.id!).subscribe((panier) => {
        this.panierProduits.add(produit.id!);
        this.panierMap.set(produit.id!, panier.id!);
      });
    }
  }

  getButtonColor(produit: Produit): string {
    return this.panierProduits.has(produit.id!) ? 'warn' : 'primary';
  }

  getButtonText(produit: Produit): string {
    return this.panierProduits.has(produit.id!) ? 'Remove from Panier' : 'Add to Panier';
  }

  private getPanierIdByProduit(produitId: number): number {
    return this.panierMap.get(produitId) || 0;
  }
}
