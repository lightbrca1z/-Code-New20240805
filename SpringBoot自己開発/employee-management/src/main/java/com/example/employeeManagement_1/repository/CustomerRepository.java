package com.example.employeeManagement_1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeeManagement_1.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
    // 必要に応じてカスタムクエリを追加できます
}
