package com.luckython_project.backend.domain.dto;

import com.luckython_project.backend.domain.entity.user.User;
import lombok.Builder;
import lombok.Getter;

@Getter
public class DetailUserDto {
    private Long id;

    private String username;

    private Integer point;

    private Integer in;

    private Integer success;

    @Builder
    public DetailUserDto(Long id, String username, Integer point, Integer in, Integer success) {
        this.id = id;
        this.username = username;
        this.point = point;
        this.in = in;
        this.success = success;
    }

    public static DetailUserDto of(User user) {
        return DetailUserDto.builder()
                .username(user.getUsername())
                .point(user.getPoint())
                .in(user.getIn())
                .success(user.getSuccess())
                .build();
    }
}
