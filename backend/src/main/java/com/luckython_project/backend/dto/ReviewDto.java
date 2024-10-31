package com.luckython_project.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ReviewDto {
    private Long userId;
    private String review;

    @Builder
    public ReviewDto(Long userId, String review) {
        this.userId = userId;
        this.review = review;
    }
}
