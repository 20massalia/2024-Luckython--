package com.luckython_project.backend.domain.dto;

import com.luckython_project.backend.domain.entity.ranking.Ranking;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

// todo

@Getter
public class RankingDto {
    private Long userId;

    private Integer rank;

    private Integer score;

    @Builder
    public RankingDto(Long userId, Integer rank, Integer score) {
        this.userId = userId;
        this.rank = rank;
        this.score = score;
    }

    public static List<RankingDto> of(List<Ranking> rankings) {
        return rankings.stream()
                .map(ranking -> new RankingDto(ranking.getUserId(), ranking.getRank(), ranking.getScore()))
                .collect(Collectors.toList());
    }
}
