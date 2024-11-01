package com.luckython_project.backend.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class UserChallenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userChallengeId;

    @ManyToOne
    @JoinColumn(name="userId", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="chId", nullable = false)
    private Challenge challenge;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @Column(nullable = false)
    private Boolean isParticipated = false;

    @Column(nullable = false)
    private Boolean isCertified = false;

    @Column(nullable = false)
    private Boolean isReviewed = false;

    @Builder
    public UserChallenge(User user, Challenge challenge,Review review, Boolean isParticipated, Boolean isCertified, Boolean isReviewed) {
        this.user = user;
        this.challenge = challenge;
        this.review = review;
        this.isParticipated = isParticipated;
        this.isCertified = isCertified;
        this.isReviewed = isReviewed;
    }

    public void participate(){
        this.isParticipated = true;
    }
    public void certify(){
        this.isCertified = true;
    }
    public void review(){
        this.isReviewed = true;
    }
}