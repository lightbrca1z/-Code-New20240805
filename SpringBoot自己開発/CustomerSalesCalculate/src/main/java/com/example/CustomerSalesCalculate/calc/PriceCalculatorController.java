package com.example.CustomerSalesCalculate.calc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PriceCalculatorController {

    @PostMapping("/calculate")
    public Map<String, Object> calculateTotalPrice(@RequestBody List<Integer> prices) {
        int totalPrice = prices.stream().mapToInt(Integer::intValue).sum();

        Map<String, Object> response = new HashMap<>();
        response.put("totalPrice", totalPrice);
        return response;
    }
}
