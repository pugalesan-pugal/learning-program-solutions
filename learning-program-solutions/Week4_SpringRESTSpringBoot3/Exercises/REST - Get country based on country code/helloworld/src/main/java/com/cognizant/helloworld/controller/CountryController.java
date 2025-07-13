package com.cognizant.helloworld.controller;

import com.cognizant.helloworld.model.Country;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CountryController {

    private static Map<String, Country> countryMap = new HashMap<>();

    static {
        countryMap.put("IN", new Country("IN", "India"));
        countryMap.put("US", new Country("US", "United States"));
        countryMap.put("JP", new Country("JP", "Japan"));
    }

    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        Country country = countryMap.get(code.toUpperCase());
        if (country == null) {
            throw new RuntimeException("Country not found: " + code);
        }
        return country;
    }
}
