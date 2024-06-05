package org.sid.mosofty.Repositories;

import org.sid.mosofty.Entities.Panier;
import org.sid.mosofty.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PanierRepository extends JpaRepository<Panier, Long> {
    List<Panier> findByUser(User user);
}
