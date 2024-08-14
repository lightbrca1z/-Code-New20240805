package com.example.training.controller;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/foo")
public class CatalogController {
    @GetMapping("/display-list")
    public String displayList(@RequestParam int pageNo, @RequestParam int maxCount) {
        System.out.println("pageNo=" + pageNo);
        System.out.println("maxCount=" + maxCount);
        return "sample";
    }

    @GetMapping("/display-list2")
    public String displayList2(PageInput pageInput) {
        System.out.println("pageNo=" + pageInput.getPageNo());
        System.out.println("maxCount=" + pageInput.getMaxCount());
        return "sample";
    }
}
