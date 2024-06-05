package org.sid.mosofty.Controllers;


import org.sid.mosofty.Entities.Produit;
import org.sid.mosofty.Services.ProduitServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    @Autowired
    private ProduitServices produitServices;

    @GetMapping
    public ResponseEntity<List<Produit>> getAllProducts(){
        return ResponseEntity.ok(produitServices.findAll());
    }

    @PostMapping("/add")
    public ResponseEntity<Produit> addProduct(@RequestBody Produit produit){
        return  ResponseEntity.ok(produitServices.save(produit));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        produitServices.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit> updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        produit.setId(id);
        Produit updatedProduit = produitServices.save(produit);
        return ResponseEntity.ok(updatedProduit);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable Long id) {
        Optional<Produit> produit = produitServices.findById(id);
        return produit.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
