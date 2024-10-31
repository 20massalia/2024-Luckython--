package com.luckython_project.backend.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class ChallengeHashListDto {
    private Long chId;
    private String title;
    private String content;
    private LocalDate date;
    private Integer participants;

    @Builder
    public ChallengeHashListDto(Long chId, String title, String content, LocalDate date, Integer participants) {
        this.chId = chId;
        this.title = title;
        this.content = content;
        this.date = date;
        this.participants = participants;
    }
}
