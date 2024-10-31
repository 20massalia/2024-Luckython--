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
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="ch_id", nullable = false)
    private Challenge challenge;

    @Builder
    public UserChallenge(User user, Challenge challenge) {
        this.user = user;
        this.challenge = challenge;
    }
}