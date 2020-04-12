package com.yassa.supplierService;

import com.yassa.supplierService.entities.Supplier;
import com.yassa.supplierService.entities.SupplierRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.stream.Stream;



@SpringBootApplication
public class SupplierServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupplierServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(SupplierRepository supplierRepository, RepositoryRestConfiguration restConfiguration) {
		return args -> {
			restConfiguration.exposeIdsFor(Supplier.class);


			Stream.of("IBM", "HP", "Apple").forEach(name -> {
						supplierRepository.save(new Supplier(null, name, "contact@"+name+".fr"));
					});

			supplierRepository.findAll().forEach(supplier -> {
				System.out.println(supplier.getName());
			});

		};

	}
}
