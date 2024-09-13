package com.example.employeemanagement.customers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public String searchForm(Model model) {
        model.addAttribute("customers", customerService.getAllCustomers());
        return "Search";
    }

    @PostMapping("/searchByName")
    public String searchByName(@RequestParam("customerName") String customerName, Model model) {
        List<Customer> customers = customerService.searchCustomerByName(customerName);
        model.addAttribute("customers", customers);
        return "Search";
    }

    @PostMapping("/searchById")
    public String searchById(@RequestParam(value = "customerId", required = false) Integer customerId, Model model) {
        if (customerId != null) {
            Customer customer = customerService.getCustomerById(customerId);
            model.addAttribute("customer", customer);
        } else {
            model.addAttribute("customer", null);
        }
        return "Search";
    }

}
