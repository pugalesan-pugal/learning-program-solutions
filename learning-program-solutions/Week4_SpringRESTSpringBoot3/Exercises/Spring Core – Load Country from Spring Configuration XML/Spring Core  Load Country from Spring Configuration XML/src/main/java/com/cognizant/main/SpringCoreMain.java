package com.cognizant.main;

import com.cognizant.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringCoreMain {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");

        Country country = (Country) context.getBean("country");

        System.out.println("Loaded Country Bean: " + country);
    }
}
