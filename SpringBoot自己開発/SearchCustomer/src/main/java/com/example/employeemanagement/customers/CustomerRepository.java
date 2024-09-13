package com.example.employeemanagement.customers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepository {
    private List<Customer> customers = new ArrayList<>();

    public CustomerRepository() {
        // ダミーデータを100個に増やす
        for (int i = 1; i <= 100; i++) {
            customers.add(new Customer(i, "顧客" + i, "所属部門名" + (i % 3)));
        }
    }

    public List<Customer> findByName(String name) {
        return customers.stream()
                .filter(customer -> customer.getName().contains(name))
                .collect(Collectors.toList());
    }

    public Customer findById(int id) {
        return customers.stream()
                .filter(customer -> customer.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public List<Customer> findAll() {
        return customers;
    }
}
