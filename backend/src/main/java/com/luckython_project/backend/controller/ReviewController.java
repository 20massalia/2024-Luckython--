package com.luckython_project.backend.controller;

import com.luckython_project.backend.dto.ReviewDto;
import com.luckython_project.backend.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/review")
public class ReviewController {

    private final ReviewService reviewService;

    // 1. 특정 챌린지에 대한 리뷰 조회하기
    @GetMapping("/{chId}")
    public ResponseEntity<List<ReviewDto>> getReviews(@PathVariable Long chId) {
        List<ReviewDto> reviews = reviewService.getReviewsByChallengeId(chId);
        return ResponseEntity.ok(reviews);
    }

    // 2. 특정 챌린지에 대한 리뷰 생성하기
    @PostMapping("/{chId}")
    public ResponseEntity<String> createReview(@PathVariable Long chId, @RequestBody ReviewDto reviewDto) {
        reviewService.createReview(chId, reviewDto);
        return ResponseEntity.status(201).body("Review created successfully for challenge ID: " + chId);
    }
}
