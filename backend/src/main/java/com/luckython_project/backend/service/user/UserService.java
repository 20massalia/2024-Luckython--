package com.luckython_project.backend.service.user;

import com.luckython_project.backend.domain.dto.DetailUserDto;
import com.luckython_project.backend.domain.dto.UpdateUserDto;
import com.luckython_project.backend.domain.entity.challenge.Challenge;
import com.luckython_project.backend.domain.entity.user.User;
import com.luckython_project.backend.exception.CustomException;
import com.luckython_project.backend.exception.ErrorCode;
import com.luckython_project.backend.repository.user.UserRepository;
import com.luckython_project.backend.service.ranking.RankingService;
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
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
        return DetailUserDto.of(user);
    }

    // userId를 기반으로 User의 참여 중인 챌린지 불러옴
    public List<Challenge> getUserChallenge(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
        return user.getChallenges();
    }

    // userId를 기반으로 유저 정보를 업데이트
    @Transactional
    public DetailUserDto updateUser(Long userId, UpdateUserDto updateUserDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
        user.updateUser(updateUserDto);
        return DetailUserDto.of(user);
    }

    // 유저 생성
    public DetailUserDto createUser(User user) {
        return DetailUserDto.of(userRepository.save(user));
    }
}