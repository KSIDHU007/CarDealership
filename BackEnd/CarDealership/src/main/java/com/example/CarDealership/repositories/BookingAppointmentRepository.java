package com.example.CarDealership.repositories;


import com.example.CarDealership.models.BookingAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingAppointmentRepository extends JpaRepository<BookingAppointment, Long> {
}
