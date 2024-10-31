package com.luckython_project.backend.service;

import com.luckython_project.backend.dto.ReviewDto;
import com.luckython_project.backend.entity.Challenge;
import com.luckython_project.backend.entity.Review;
import com.luckython_project.backend.repository.ChallengeRepository;
import com.luckython_project.backend.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ChallengeRepository challengeRepository;

    // 1. 특정 챌린지에 대한 리뷰 생성하기
    @Transactional
    public void createReview(Long chId, ReviewDto reviewDto) {
        Challenge challenge = challengeRepository.findById(chId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid challenge ID: " + chId));
        Review review = new Review();
        reviewRepository.save(review);
    }

    // 2. 특정 챌린지에 대한 리뷰 조회하기
    @Transactional(readOnly = true)
    public List<ReviewDto> getReviewsByChallengeId(Long chId) {
        return reviewRepository.findByChallenge_ChId(chId)
                .stream()
                .map(review -> ReviewDto.builder()
                        .userId(review.getUser().getUserId())
                        .review(review.getReview())
                        .build())
                .toList();
    }
}
