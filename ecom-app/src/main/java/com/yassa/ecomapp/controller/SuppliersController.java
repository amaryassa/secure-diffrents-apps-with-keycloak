package com.yassa.ecomapp.controller;


import lombok.Data;
import org.keycloak.adapters.springsecurity.client.KeycloakRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.lang.reflect.Type;

@Controller
public class SuppliersController {
    @Autowired
    private KeycloakRestTemplate keycloakRestTemplate;

    @GetMapping("/suppliers")
    public String suppliers(String name, Model model) {
        ResponseEntity<PagedModel<Supplier>>
                respose = keycloakRestTemplate.exchange(
                "http://localhost:8083/suppliers",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<PagedModel<Supplier>>() {
                });

        model.addAttribute("suppliers", respose.getBody().getContent());

        return "suppliers";
    }

    @ExceptionHandler(Exception.class)
    public String exceptionHandler() {
        return "Errors";
    }

}




@Data
class Supplier {
    private Long id;
    private String name;
    private String email;
}

