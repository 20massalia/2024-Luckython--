package com.luckython_project.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ImageDto {
    private String chImg;

    @Builder
    public ImageDto(String chImg) {
        this.chImg = chImg;
    }
}
