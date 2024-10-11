package com.example.CarDealership.controllers;
import com.example.CarDealership.models.BookingAppointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.CarDealership.services.BookingAppointmentService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookingAppointmentController {

    @Autowired
    private BookingAppointmentService service;

    @GetMapping("/appointments")
    public List<BookingAppointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/appointment/{id}")
    public BookingAppointment getAppointmentById(@PathVariable Long id) {
        return service.getAppointmentById(id).orElse(null);
    }

    @PostMapping("/save")
    public String saveAppointment(@RequestBody BookingAppointment appointment) {
        return service.saveAppointment(appointment);
    }

    @PutMapping("/update/{id}")
    public String updateAppointment(@PathVariable Long id, @RequestBody BookingAppointment appointment) {
        return service.updateAppointment(id, appointment);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAppointment(@PathVariable Long id) {
        return service.deleteAppointment(id);
    }
}
