package org.sid.mosofty.Controllers;

import org.sid.mosofty.Entities.Panier;
import org.sid.mosofty.Entities.Produit;
import org.sid.mosofty.Entities.User;
import org.sid.mosofty.Services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/panier")
public class PanierController {

    @Autowired
    private PanierService panierService;


    @PostMapping("/add")
    public ResponseEntity<Panier> addProductToPanier(@RequestBody Map<String, Long> request) {
        Long userId = request.get("userId");
        Long produitId = request.get("produitId");

        User user = new User();
        user.setId(userId);

        Produit produit = new Produit();
        produit.setId(produitId);

        return ResponseEntity.ok(panierService.addProductToPanier(user, produit));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeProductFromPanier(@PathVariable Long id) {
        panierService.removeProductFromPanier(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Panier>> getPanierByUser(@PathVariable Long userId) {
        User user = new User();
        user.setId(userId);
        return ResponseEntity.ok(panierService.getPanierByUser(user));
    }
}
