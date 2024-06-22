package rs.ac.sinigidunum.pc_shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.sinigidunum.pc_shop.entity.Product;
import rs.ac.sinigidunum.pc_shop.model.ProductModel;
import rs.ac.sinigidunum.pc_shop.service.ProductService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/product")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {
    private final ProductService service;

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getProductById(id));
    }

    @PostMapping
    public Product createProduct(@RequestBody Product customer) {
        return service.createProduct(customer);
    }

    @PutMapping(path = "/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody ProductModel product) {
        return service.updateProduct(id, product);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Integer id) {
        service.deleteProduct(id);
    }
}
