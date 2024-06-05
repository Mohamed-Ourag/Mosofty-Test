package org.sid.mosofty.Services;


import org.sid.mosofty.Entities.Produit;
import org.sid.mosofty.Repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitServices {

    @Autowired
    private ProduitRepository produitRepository;

    public Produit save(Produit produit){
        return  produitRepository.save(produit);
    }
    public List<Produit> findAll(){
        return  produitRepository.findAll();
    }

    public void deleteById(Long id){
        produitRepository.deleteById(id);
    }
    public Optional<Produit> findById(Long id) {
        return produitRepository.findById(id);
    }


}
