package rs.ac.sinigidunum.pc_shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.sinigidunum.pc_shop.entity.Sale;
import rs.ac.sinigidunum.pc_shop.service.SaleService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/sale")
@RequiredArgsConstructor
@CrossOrigin
public class SaleController {
    private final SaleService service;

    @GetMapping
    public List<Sale> getAllSales() {
        return service.getAllSales();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getSaleById(id));
    }

    @PostMapping
    public Sale createSale(@RequestBody Sale sale) {
        return service.createSale(sale);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteSale(@PathVariable Integer id) {
        service.deleteSale(id);
    }
}
