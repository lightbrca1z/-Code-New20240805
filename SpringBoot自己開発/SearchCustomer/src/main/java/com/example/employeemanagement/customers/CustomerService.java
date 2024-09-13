package com.example.employeemanagement.customers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> searchCustomerByName(String name) {
        return customerRepository.findByName(name);
    }

    public Customer searchCustomerById(int id) {
        return customerRepository.findById(id);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    
    public Customer getCustomerById(int id) {
        return customerRepository.findById(id);
    }
}
