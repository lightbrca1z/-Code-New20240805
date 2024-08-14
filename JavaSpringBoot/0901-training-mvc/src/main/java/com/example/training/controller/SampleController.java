package com.example.training.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SampleController {
    @GetMapping("/display-sample")
    public String displaySample(Model model) {
        model.addAttribute("fullName", "神奈川三郎");
        return "sample";
    }
}
