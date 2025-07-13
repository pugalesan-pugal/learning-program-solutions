package com.pugal.authjwt.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()) // CSRF off for REST APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/authenticate").permitAll() // ✅ Allow this
                .anyRequest().authenticated() // others need auth
            );
        return http.build();
    }
}
