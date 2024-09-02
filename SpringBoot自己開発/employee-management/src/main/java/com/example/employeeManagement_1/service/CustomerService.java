package com.example.employeeManagement_1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeeManagement_1.entity.Customer;
import com.example.employeeManagement_1.repository.CustomerRepository;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    // 全ての顧客を取得
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // 顧客を保存
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // その他のメソッド（更新、削除など）を追加可能
}
