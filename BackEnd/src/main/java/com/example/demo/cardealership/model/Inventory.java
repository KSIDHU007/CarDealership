package com.example.demo.cardealership.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for inventory item

    private String name; // Name of the inventory item
    private String description; // Description of the inventory item
    private double price; // Price of the inventory item
    private int quantity; // Quantity of the inventory item
}
