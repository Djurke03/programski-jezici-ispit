package rs.ac.sinigidunum.pc_shop.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ProductModel {
    private String name;
    private String description;
    private double price;
}
