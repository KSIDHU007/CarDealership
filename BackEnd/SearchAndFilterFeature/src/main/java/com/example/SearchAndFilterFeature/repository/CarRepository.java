package com.example.SearchAndFilterFeature.repository;

import com.example.SearchAndFilterFeature.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByMake(String make);
    List<Car> findByModel(String model);
    List<Car> findByYear(int year);
    List<Car> findByPriceBetween(double minPrice, double maxPrice);
    List<Car> findByTransmission(String transmission);
    // Add more search methods as needed
}
