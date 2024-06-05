import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-produit-eadd',
  templateUrl: './produit-eadd.component.html',
  styleUrls: ['./produit-eadd.component.css']
})
export class ProduitEaddComponent implements OnInit {
  produitForm!: FormGroup;

  constructor(private fb: FormBuilder, private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.produitForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      const produit: Produit = this.produitForm.value;
      this.produitService.createProduit(produit).subscribe(
        response => {
          console.log('Produit added successfully', response);
          this.router.navigate(['/admin/produits']);
        },
        error => {
          console.error('Error adding produit', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
