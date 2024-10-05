package com.example.CustomerSalesCalculate.calc;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PriceCalculatorController {

	 @GetMapping("/")
	 public String showForm() {
        return "index"; // index.htmlを表示
	 }
	
    @PostMapping("/calculate")
    public String calculateTotalPrice(@RequestParam List<Integer> prices, Model model) {
        // 金額の合計を計算
        int totalPrice = prices.stream().mapToInt(Integer::intValue).sum();

        // モデルに結果を追加
        model.addAttribute("totalPrice", totalPrice);

        // 結果画面にリダイレクト
        return "result"; // result.html というテンプレートに結果を渡す
    }
}
