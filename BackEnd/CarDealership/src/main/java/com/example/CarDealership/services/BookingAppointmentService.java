package com.example.CarDealership.services;


import com.example.CarDealership.models.BookingAppointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CarDealership.repositories.BookingAppointmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookingAppointmentService {

    @Autowired
    private BookingAppointmentRepository repository;

    public List<BookingAppointment> getAllAppointments() {
        return repository.findAll();
    }

    public Optional<BookingAppointment> getAppointmentById(Long id) {
        return repository.findById(id);
    }

    public String saveAppointment(BookingAppointment appointment) {
        repository.save(appointment);
        return "Appointment Saved";
    }

    public String updateAppointment(Long id, BookingAppointment appointmentDetails) {
        Optional<BookingAppointment> appointmentOpt = repository.findById(id);
        if (appointmentOpt.isPresent()) {
            BookingAppointment appointment = appointmentOpt.get();
            appointment.setFirstName(appointmentDetails.getFirstName());
            appointment.setLastName(appointmentDetails.getLastName());
            appointment.setEmail(appointmentDetails.getEmail());
            appointment.setPhone(appointmentDetails.getPhone());
            appointment.setCarMake(appointmentDetails.getCarMake());
            appointment.setCarModel(appointmentDetails.getCarModel());
            appointment.setVin(appointmentDetails.getVin());
            appointment.setAppointmentDate(appointmentDetails.getAppointmentDate());
            appointment.setComments(appointmentDetails.getComments());
            repository.save(appointment);
            return "Appointment Updated";
        } else {
            return "Appointment not found";
        }
    }

    public String deleteAppointment(Long id) {
        repository.deleteById(id);
        return "Appointment Deleted";
    }
}
