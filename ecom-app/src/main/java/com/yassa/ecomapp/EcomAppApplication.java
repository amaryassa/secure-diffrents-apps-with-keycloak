package com.yassa.ecomapp;

import com.yassa.ecomapp.entites.Product;
import com.yassa.ecomapp.entites.ProductRepository;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcomAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcomAppApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository ) {
		return  args -> {

			productRepository.save(new Product(null, "ordi HP", 850));
			productRepository.save(new Product(null, "imprimante LX HP", 150));
			productRepository.save(new Product(null, "Iphone X ", 1150));

			productRepository.findAll().forEach(product -> {
				System.out.println(product.getName());
			});

		};
	}

}




