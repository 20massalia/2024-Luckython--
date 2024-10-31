package com.luckython_project.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class ChallengeDto {
    private String title;
    private String content;
    private Long userId;
    private String hashtag;
    private LocalDate date;
    private Integer prize;

    @Builder
    public ChallengeDto(String title, String content, Long userId, String hashtag, LocalDate date, Integer prize) {
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.hashtag = hashtag;
        this.date = date;
        this.prize = prize;
    }
}
