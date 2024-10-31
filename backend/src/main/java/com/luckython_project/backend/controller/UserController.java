package com.luckython_project.backend.controller;

import com.luckython_project.backend.dto.DetailUserDto;
import com.luckython_project.backend.dto.UpdateUserDto;
import com.luckython_project.backend.entity.Challenge;
import com.luckython_project.backend.entity.User;
import com.luckython_project.backend.entity.UserChallenge;
import com.luckython_project.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    // 유저 정보 조회
    @GetMapping("/{userId}")
    public ResponseEntity<DetailUserDto> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok()
                .body(userService.getUser(userId));
    }

    // 유저가 속한 챌린지 조회
    @GetMapping("/challenge/{userId}")
    public ResponseEntity<List<UserChallenge>> getUserChallenge(@PathVariable Long userId){
        return ResponseEntity.ok()
                .body(userService.getUserChallenge(userId));
    }

    // 유저 필드 값 수정
    @PutMapping("/{userId}")
    public ResponseEntity<DetailUserDto> updateUser(@PathVariable Long userId, @RequestBody UpdateUserDto updateUserDto){
        return ResponseEntity.ok()
                .body(userService.updateUser(userId, updateUserDto));
    }

    // 유저 등록
    @PostMapping
    public ResponseEntity<DetailUserDto> createUser(@RequestBody User user){
        return ResponseEntity.ok()
                .body(userService.createUser(user));
    }
}