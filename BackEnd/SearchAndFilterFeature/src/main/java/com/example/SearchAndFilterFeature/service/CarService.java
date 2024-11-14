package com.example.SearchAndFilterFeature.service;

import com.example.SearchAndFilterFeature.model.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {
    Car createCar(Car car);
    List<Car> getAllCars();
    Optional<Car> getCarById(Long id);
    List<Car> searchCars(String make, String model, Integer year, Double minPrice, Double maxPrice, String transmission);
    Car updateCar(Long id, Car car);
    void deleteCar(Long id);
}
