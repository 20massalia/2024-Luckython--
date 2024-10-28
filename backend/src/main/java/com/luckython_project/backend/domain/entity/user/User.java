package com.luckython_project.backend.domain.entity.user;

import com.luckython_project.backend.domain.dto.UpdateUserDto;
import com.luckython_project.backend.domain.entity.challenge.Challenge;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private Integer point;

    @Column(nullable = false)
    private Integer participation;

    @Column(nullable = false)
    private Integer success;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Challenge> challenges;

    @Builder
    public User(Long userId, String username, Integer point, Integer participation, Integer success) {
        this.userId = userId;
        this.username = username;
        this.point = point;
        this.participation = participation;
        this.success = success;
    }

    public void updateUser(UpdateUserDto updateUserDto) {
        this.point = this.point + updateUserDto.getPoint();
        this.participation = this.participation + updateUserDto.getIn();
        this.success = this.success + updateUserDto.getSuccess();
    }
}
