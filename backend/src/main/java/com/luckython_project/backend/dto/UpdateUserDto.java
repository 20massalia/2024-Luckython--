package com.luckython_project.backend.dto;

import lombok.Getter;

@Getter
// 유저 필드 수정 DTO
public class UpdateUserDto {
    private Integer point; // 포인트
    private Integer in; // 참여 챌린지 수
    private Integer success; // 성공 횟수
}
