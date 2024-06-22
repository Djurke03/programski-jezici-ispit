package rs.ac.sinigidunum.pc_shop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.sinigidunum.pc_shop.entity.Product;
import rs.ac.sinigidunum.pc_shop.model.ProductModel;
import rs.ac.sinigidunum.pc_shop.repository.ProductRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository repository;

    public List<Product> getAllProducts() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Product> getProductById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Product createProduct(Product product) {
        product.setId(null);
        return repository.save(product);
    }

    public Product updateProduct(Integer id, ProductModel model) {
        Product product = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        product.setName(model.getName());
        product.setDescription(model.getDescription());
        product.setPrice(model.getPrice());
        product.setUpdatedAt(LocalDateTime.now());
        return repository.save(product);
    }

    public void deleteProduct(Integer id) {
        Product product = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        product.setDeletedAt(LocalDateTime.now());
        repository.save(product);
    }
}
