package com.luckython_project.backend.domain.entity.ranking;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Ranking {
    @Id
    private Long userId;

    private Integer rank;

    private Integer score;
}
