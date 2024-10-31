package com.luckython_project.backend.service;

import com.luckython_project.backend.dto.DetailUserDto;
import com.luckython_project.backend.dto.UpdateUserDto;
import com.luckython_project.backend.entity.Challenge;
import com.luckython_project.backend.entity.User;
import com.luckython_project.backend.entity.UserChallenge;
import com.luckython_project.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // userId를 기반으로 User 정보를 불러옴
    public DetailUserDto getUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        return DetailUserDto.of(user);
    }

    // userId를 기반으로 User의 참여 중인 챌린지 불러옴
    public List<UserChallenge> getUserChallenge(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        return user.getUserChallenges();
    }

    // userId를 기반으로 유저 정보를 업데이트
    @Transactional
    public DetailUserDto updateUser(Long userId, UpdateUserDto updateUserDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.updateUser(updateUserDto);
        return DetailUserDto.of(user);
    }

    // 유저 생성
    public DetailUserDto createUser(User user) {
        return DetailUserDto.of(userRepository.save(user));
    }
}