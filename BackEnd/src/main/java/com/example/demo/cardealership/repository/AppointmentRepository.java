package com.example.demo.cardealership.repository;

import com.example.demo.cardealership.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    /**
     * Find appointments by User ID.
     *
     * @param userId User ID.
     * @return List of appointments for the specified user.
     */
    List<Appointment> findByUserId(Long userId);
}
