package com.example.employeeManagement_1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.employeeManagement_1.entity.Customer;
import com.example.employeeManagement_1.entity.Customer.Department;
import com.example.employeeManagement_1.repository.CustomerRepository;

@SpringBootApplication
public class EmployeeManagementApplication {

	@Autowired
	 private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            // サンプルデータの追加
            customerRepository.save(new Customer("C001", "田中 太郎", Department.人事部, "080-3123-3424", "tanaka.taro@example.com"));
            customerRepository.save(new Customer("C002", "鈴木 花子", Department.経理部, "080-4123-4525", "suzuki.hanako@example.com"));
            customerRepository.save(new Customer("C003", "佐藤 次郎", Department.システム部, "080-5123-5626", "sato.jiro@example.com"));
            customerRepository.save(new Customer("C004", "高橋 三郎", Department.広報部, "080-6123-6727", "takahashi.saburo@example.com"));
        };
    }
}
