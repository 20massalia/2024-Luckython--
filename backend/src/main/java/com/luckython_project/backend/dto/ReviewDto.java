package com.luckython_project.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReviewDto {
    private String review;

    @Builder
    public ReviewDto(String review) {
        this.review = review;
    }
}
