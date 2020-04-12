package com.yassa.ecomapp.controller;

import com.yassa.ecomapp.entites.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public String index() {


        return "index";
    }


    @GetMapping("/produits")
    public String products(@RequestParam(name="name", required=false, defaultValue="amar") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("products", productRepository.findAll());

        return "products";
    }




    @RequestMapping("/hello")
    @ResponseBody
    String hello() {
        return "Hello World!";
    }


    @GetMapping("/home")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="amar") String name, Model model) {
        model.addAttribute("name", name);
        return "home";
    }




}
