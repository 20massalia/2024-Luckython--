package com.luckython_project.backend.domain.dto;

import lombok.Getter;

@Getter
public class UpdateUserDto {
    private Integer point; // 포인트
    private Integer in; // 참여 챌린지 수
    private Integer success; // 성공 횟수
}
