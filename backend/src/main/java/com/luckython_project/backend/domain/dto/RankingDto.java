package com.luckython_project.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RankingDto {
    private Long userId;
    private String username;
    private Integer point;
    private Integer rank;
}
