package com.luckython_project.backend.domain.entity.user;

import com.luckython_project.backend.domain.dto.UpdateUserDto;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private Integer point;

    @Column(nullable = false)
    private Integer in;

    @Column(nullable = false)
    private Integer success;

    @Builder
    public User(Long id, String username, Integer point, Integer in, Integer success) {
        this.id = id;
        this.username = username;
        this.point = point;
        this.in = in;
        this.success = success;
    }

    public void updateUser(UpdateUserDto updateUserDto) {
        this.point = this.point + updateUserDto.getPoint();
        this.in = this.in + updateUserDto.getIn();
        this.success = this.success + updateUserDto.getSuccess();
    }
}
