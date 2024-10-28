package com.luckython_project.backend.domain.entity.challenge;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(name = "userId")
    private Long userId;

    @Column(length = 10)
    private String hashtag;

    @Column
    private java.sql.Date date;

    @Column(length = 50)
    private String chImg;

    @Column
    private Integer prize;
}
