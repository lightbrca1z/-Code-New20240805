package com.example.employeeManagement_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.employeeManagement_1.service.CustomerService;


@Controller
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public String viewHomePage(Model model) {
        model.addAttribute("listCustomers", customerService.getAllCustomers());
        return "index";
    }
}
