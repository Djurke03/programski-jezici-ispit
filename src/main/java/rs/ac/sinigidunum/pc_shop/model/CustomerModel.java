package rs.ac.sinigidunum.pc_shop.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CustomerModel {
    private String name;
    private String email;
    private String phone;
    private String address;
}
