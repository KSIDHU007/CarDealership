package com.example.demo.cardealership.controller;

import com.example.demo.cardealership.model.Appointment;
import com.example.demo.cardealership.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    /**
     * Book a new appointment.
     *
     * @param appointment Appointment details.
     * @return Saved appointment.
     */
    @PostMapping
    public ResponseEntity<?> bookAppointment(@RequestBody Appointment appointment) {
        try {
            if (appointment.getUserId() == null || appointment.getDate() == null || appointment.getTime() == null) {
                return ResponseEntity.badRequest().body("Missing required fields: userId, date, or time.");
            }
            Appointment savedAppointment = appointmentService.bookAppointment(appointment);
            return ResponseEntity.ok(savedAppointment);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error booking appointment: " + e.getMessage());
        }
    }

    /**
     * Fetch all appointments for a specific user.
     *
     * @param userId User ID.
     * @return List of appointments for the user.
     */
    @GetMapping("/{userId}")
    public ResponseEntity<?> getAppointmentsByUserId(@PathVariable Long userId) {
        try {
            List<Appointment> appointments = appointmentService.getAppointmentsByUserId(userId);
            if (appointments.isEmpty()) {
                return ResponseEntity.noContent().build(); // 204 No Content
            }
            return ResponseEntity.ok(appointments); // 200 OK
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching appointments: " + e.getMessage());
        }
    }
}
