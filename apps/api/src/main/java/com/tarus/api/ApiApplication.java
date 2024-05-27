package com.tarus.api;

import com.tarus.api.user.User;
import com.tarus.api.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
            UserService userService
    ) {
        return args -> {
            userService.register(User.builder()
                            .username("vic")
                            .email("vic@gmail.com")
                            .password("aaa")
                            .build());
            userService.register(User.builder()
                    .username("John")
                    .email("john@gmail.com")
                    .password("aaa")
                    .build());
            userService.register(User.builder()
                    .username("Anny")
                    .email("anny@gmail.com")
                    .password("aaa")
                    .build());



        };
    }
}
