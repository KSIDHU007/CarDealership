package com.example.demo.cardealership.service;

import com.example.demo.cardealership.model.Appointment;
import com.example.demo.cardealership.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    /**
     * Book a new appointment.
     *
     * @param appointment Appointment details.
     * @return Saved appointment.
     */
    public Appointment bookAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    /**
     * Fetch all appointments for a specific user.
     *
     * @param userId User ID.
     * @return List of appointments for the user.
     */
    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }
}
