package com.luckython_project.backend.dto.ChallengeDto;

import com.luckython_project.backend.entity.UserChallenge;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserChallengeDto {
    private Long userId;
    private Long challengeId;
    private Long reviewId;

    private Boolean isParticipated;
    private Boolean isCertified;
    private Boolean isReviewed;

    @Builder
    public UserChallengeDto(Long userId, Long challengeId, Long reviewId, Boolean isParticipated, Boolean isCertified, Boolean isReviewed) {
        this.userId = userId;
        this.challengeId = challengeId;
        this.reviewId = reviewId;
        this.isParticipated = isParticipated;
        this.isCertified = isCertified;
        this.isReviewed = isReviewed;
    }

    public static UserChallengeDto of(UserChallenge userChallenge) {
        return UserChallengeDto.builder()
                .userId(userChallenge.getUser().getUserId())
                .challengeId(userChallenge.getUserChallengeId())
                .reviewId(userChallenge.getReview() != null ? userChallenge.getReview().getReviewId() : null)
                .isCertified(userChallenge.getIsCertified())
                .isParticipated(userChallenge.getIsParticipated())
                .isReviewed(userChallenge.getIsReviewed())
                .build();
    }
}
