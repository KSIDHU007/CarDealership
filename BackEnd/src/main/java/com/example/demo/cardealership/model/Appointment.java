package com.example.demo.cardealership.model;

import jakarta.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for the appointment

    @Column(nullable = false)
    private Long userId; // User ID associated with the appointment

    @Column(nullable = false)
    private Date date; // Appointment date

    @Column(nullable = false)
    private Time time; // Appointment time

    private String service; // Type of service requested (e.g., repair, inspection)

    private String status = "PENDING"; // Default status of the appointment

    @Column(updatable = false)
    private Timestamp createdAt = new Timestamp(System.currentTimeMillis()); // Creation timestamp

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
