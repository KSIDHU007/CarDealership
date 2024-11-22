package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Inventory;
import com.example.demo.cardealership.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    /**
     * Fetch all inventory items.
     *
     * @return List of all inventory items.
     */
    @GetMapping
    public ResponseEntity<List<Inventory>> getAllInventory() {
        List<Inventory> inventoryList = inventoryService.getAllInventory();
        if (inventoryList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(inventoryList);
    }

    /**
     * Fetch inventory item by ID.
     *
     * @param id Inventory ID.
     * @return Inventory item if found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getInventoryById(@PathVariable Long id) {
        Optional<Inventory> inventory = inventoryService.getInventoryById(id);
        if (inventory.isPresent()) {
            return ResponseEntity.ok(inventory.get());
        } else {
            return ResponseEntity.status(404).body("Inventory item not found with ID: " + id);
        }
    }

    /**
     * Add a new inventory item.
     *
     * @param inventory Inventory details.
     * @return Saved inventory item.
     */
    @PostMapping
    public ResponseEntity<?> addInventory(@RequestBody Inventory inventory) {
        try {
            Inventory addedInventory = inventoryService.addInventory(inventory);
            return ResponseEntity.ok(addedInventory);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding inventory: " + e.getMessage());
        }
    }

    /**
     * Update an existing inventory item.
     *
     * @param id        Inventory ID.
     * @param inventory Updated inventory details.
     * @return Updated inventory item if successful.
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateInventory(@PathVariable Long id, @RequestBody Inventory inventory) {
        try {
            Optional<Inventory> existingInventory = inventoryService.getInventoryById(id);
            if (existingInventory.isPresent()) {
                inventory.setId(id); // Ensure the ID matches the one being updated
                Inventory updatedInventory = inventoryService.addInventory(inventory);
                return ResponseEntity.ok(updatedInventory);
            } else {
                return ResponseEntity.status(404).body("Inventory item not found with ID: " + id);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error updating inventory: " + e.getMessage());
        }
    }

    /**
     * Delete an inventory item.
     *
     * @param id Inventory ID.
     * @return Success message if deleted.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteInventory(@PathVariable Long id) {
        try {
            boolean exists = inventoryService.existsById(id);
            if (!exists) {
                return ResponseEntity.status(404).body("Inventory item not found with ID: " + id);
            }
            inventoryService.deleteInventory(id);
            return ResponseEntity.ok("Inventory item with ID " + id + " deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting inventory: " + e.getMessage());
        }
    }
}
