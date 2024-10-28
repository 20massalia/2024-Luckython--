package com.luckython_project.backend.controller.user;

import com.luckython_project.backend.domain.dto.DetailUserDto;
import com.luckython_project.backend.domain.dto.UpdateUserDto;
import com.luckython_project.backend.domain.entity.challenge.Challenge;
import com.luckython_project.backend.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<DetailUserDto> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok()
                .body(userService.getUser(userId));
    }

    @GetMapping("/challenge/{userId}")
    public ResponseEntity<List<Challenge>> getUserChallenge(@PathVariable Long userId){
        return ResponseEntity.ok()
                .body(userService.getUserChallenge(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<DetailUserDto> updateUser(@PathVariable Long userId, @RequestBody UpdateUserDto updateUserDto){
        return ResponseEntity.ok()
                .body(userService.updateUser(userId, updateUserDto));
    }
}
