package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Inventory;
import com.example.demo.cardealership.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public ResponseEntity<List<Inventory>> getAllInventory() {
        List<Inventory> inventoryList = inventoryService.getAllInventory();
        if (inventoryList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(inventoryList);
    }

    @PostMapping
    public ResponseEntity<?> addInventory(@RequestBody Inventory inventory) {
        try {
            if (inventory.getName() == null || inventory.getName().isEmpty()) {
                return ResponseEntity.badRequest().body("Item name is required");
            }
            if (inventory.getPrice() <= 0) {
                return ResponseEntity.badRequest().body("Price must be greater than zero");
            }
            if (inventory.getQuantity() < 0) {
                return ResponseEntity.badRequest().body("Quantity cannot be negative");
            }

            Inventory addedInventory = inventoryService.addInventory(inventory);
            return ResponseEntity.ok(addedInventory);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding inventory: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteInventory(@PathVariable Long id) {
        try {
            if (!inventoryService.existsById(id)) {
                return ResponseEntity.status(404).body("Inventory item with ID " + id + " not found");
            }

            inventoryService.deleteInventory(id);
            return ResponseEntity.ok("Inventory item with ID " + id + " deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting inventory: " + e.getMessage());
        }
    }
}
