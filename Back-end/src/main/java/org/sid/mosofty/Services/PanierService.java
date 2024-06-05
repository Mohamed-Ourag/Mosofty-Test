package org.sid.mosofty.Services;

import org.sid.mosofty.Entities.Panier;
import org.sid.mosofty.Entities.Produit;
import org.sid.mosofty.Entities.User;
import org.sid.mosofty.Repositories.PanierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanierService {

    @Autowired
    private PanierRepository panierRepository;

    public Panier addProductToPanier(User user, Produit produit) {
        Panier panier = new Panier();
        panier.setUser(user);
        panier.setProduit(produit);
        return panierRepository.save(panier);
    }

    public void removeProductFromPanier(Long id) {
        panierRepository.deleteById(id);
    }

    public List<Panier> getPanierByUser(User user) {
        return panierRepository.findByUser(user);
    }
}
