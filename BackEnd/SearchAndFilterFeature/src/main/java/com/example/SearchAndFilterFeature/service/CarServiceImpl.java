package com.example.SearchAndFilterFeature.service;

import com.example.SearchAndFilterFeature.model.Car;
import com.example.SearchAndFilterFeature.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> getCarById(Long id) {
        return carRepository.findById(id);
    }

    @Override
    public List<Car> searchCars(String make, String model, Integer year, Double minPrice, Double maxPrice, String transmission) {
        if (make != null) {
            return carRepository.findByMake(make);
        }
        // Add other conditions as needed
        return carRepository.findAll(); // Default to returning all cars if no parameters are provided
    }

    @Override
    public Car updateCar(Long id, Car car) {
        Optional<Car> existingCar = carRepository.findById(id);
        if (existingCar.isPresent()) {
            Car updatedCar = existingCar.get();
            updatedCar.setMake(car.getMake());
            updatedCar.setModel(car.getModel());
            updatedCar.setYear(car.getYear());
            updatedCar.setPrice(car.getPrice());
            updatedCar.setTransmission(car.getTransmission());
            return carRepository.save(updatedCar);
        } else {
            return null;
        }
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}
