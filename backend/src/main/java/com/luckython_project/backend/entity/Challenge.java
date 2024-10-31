package com.luckython_project.backend.entity;

import com.luckython_project.backend.dto.ChallengeDto;
import com.luckython_project.backend.dto.ImageDto;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @OneToMany(mappedBy = "challenge", fetch = FetchType.LAZY)
    private List<UserChallenge> userChallenges;

    @Column(length = 10)
    private String hashtag;

    @Column
    private LocalDate date;

    @Column(length = 50)
    private String chImg;

    @Column
    private Integer prize;

    @Builder
    public Challenge(Long chId, String title, String content, List<UserChallenge> userChallenges, String hashtag, LocalDate date, String chImg, Integer prize) {
        this.chId = chId;
        this.title = title;
        this.content = content;
        this.userChallenges = userChallenges;
        this.hashtag = hashtag;
        this.date = date;
        this.chImg = chImg;
        this.prize = prize;
    }

    public void updateChallenge(ChallengeDto challengeDto) {
        this.title = challengeDto.getTitle();
        this.content = challengeDto.getContent();
        this.hashtag = challengeDto.getHashtag();
        this.date = challengeDto.getDate();
        this.prize = challengeDto.getPrize();
    }

    public void updateImg(ImageDto imageDto){
        this.chImg = imageDto.getChImg();
    }
}
