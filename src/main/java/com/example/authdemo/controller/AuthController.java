package com.example.authdemo.controller;

import com.example.authdemo.model.User;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin
public class AuthController {

    Map<String, User> db = new HashMap<>();

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        db.put(user.getUsername(), user);
        return user;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {

        User u = db.get(user.getUsername());

        return u != null && u.getPassword().equals(user.getPassword());
    }

    @GetMapping("/user/{username}")
    public User getUser(@PathVariable String username) {
        return db.get(username);
    }
}