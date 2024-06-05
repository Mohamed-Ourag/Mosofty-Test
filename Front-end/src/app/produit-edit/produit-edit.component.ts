import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produitForm!: FormGroup;
  produitId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.produitId = +this.route.snapshot.paramMap.get('id')!;
    this.produitService.getProduit(this.produitId).subscribe(data => {
      this.produitForm = this.fb.group({
        name: [data.name, Validators.required],
        description: [data.description, Validators.required],
        price: [data.price, Validators.required]
      });
    });
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      const updatedProduit: Produit = {
        id: this.produitId,
        ...this.produitForm.value
      };
      this.produitService.updateProduit(this.produitId, updatedProduit).subscribe(() => {
        this.router.navigate(['/admin/produits']);
      });
    }
  }
}
