package rs.ac.sinigidunum.pc_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.sinigidunum.pc_shop.entity.Sale;

import java.util.List;
import java.util.Optional;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Integer> {
    List<Sale> findAllByDeletedAtIsNull();

    Optional<Sale> findByIdAndDeletedAtIsNull(Integer id);
}
