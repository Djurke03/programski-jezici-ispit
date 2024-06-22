package rs.ac.sinigidunum.pc_shop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.sinigidunum.pc_shop.entity.Sale;
import rs.ac.sinigidunum.pc_shop.repository.SaleRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SaleService {
    private final SaleRepository repository;

    public List<Sale> getAllSales() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Sale> getSaleById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Sale createSale(Sale sale) {
        sale.setId(null);
        return repository.save(sale);
    }

    public void deleteSale(Integer id) {
        Sale sale = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        sale.setDeletedAt(LocalDateTime.now());
        repository.save(sale);
    }
}
