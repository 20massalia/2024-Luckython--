package com.luckython_project.backend.service;

import com.luckython_project.backend.dto.ChallengeUserListDto;
import com.luckython_project.backend.dto.ReviewDto;
import com.luckython_project.backend.dto.ReviewListDto;
import com.luckython_project.backend.entity.Challenge;
import com.luckython_project.backend.entity.Review;
import com.luckython_project.backend.entity.User;
import com.luckython_project.backend.repository.ChallengeRepository;
import com.luckython_project.backend.repository.ReviewRepository;
import com.luckython_project.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final ChallengeRepository challengeRepository;

    // 1. 특정 챌린지에 대한 리뷰 생성하기
    @Transactional
    public void createReview(Long chId, Long userId, ReviewDto reviewDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID: " + userId));
        user.addPoint(100);
        userRepository.save(user);

        Challenge challenge = challengeRepository.findById(chId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid challenge ID: " + chId));

        Review review = Review.builder()
                .user(user)
                .challenge(challenge)
                .review(reviewDto.getReview())
                .build();
        reviewRepository.save(review);
    }

    // 2. 특정 챌린지에 대한 리뷰 조회하기
    @Transactional(readOnly = true)
    public List<ReviewListDto> getReviewsByChallengeId(Long chId) {
        return reviewRepository.findByChallenge_ChId(chId)
                .stream()
                .map(review -> ReviewListDto.builder()
                        .userId(review.getUser().getUserId())
                        .userName(review.getUser().getUsername())
                        .review(review.getReview())
                        .build())
                .toList();
    }
}
