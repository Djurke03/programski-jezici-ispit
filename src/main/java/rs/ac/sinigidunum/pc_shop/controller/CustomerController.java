package rs.ac.sinigidunum.pc_shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.sinigidunum.pc_shop.entity.Customer;
import rs.ac.sinigidunum.pc_shop.model.CustomerModel;
import rs.ac.sinigidunum.pc_shop.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/customer")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {
    private final CustomerService service;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return service.getAllCustomers();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getCustomerById(id));
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return service.createCustomer(customer);
    }

    @PutMapping(path = "/{id}")
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody CustomerModel customer) {
        return service.updateCustomer(id, customer);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteCustomer(@PathVariable Integer id) {
        service.deletedCustomer(id);
    }
}
