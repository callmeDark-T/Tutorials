package com.cashrulezentertainment.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cashrulezentertainment.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
