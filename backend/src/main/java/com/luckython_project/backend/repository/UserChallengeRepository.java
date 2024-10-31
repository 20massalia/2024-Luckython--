package com.luckython_project.backend.repository;

import com.luckython_project.backend.entity.Challenge;
import com.luckython_project.backend.entity.User;
import com.luckython_project.backend.entity.UserChallenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserChallengeRepository extends JpaRepository<UserChallenge, Long> {

    @Query("SELECT count(*) FROM UserChallenge WHERE challenge.chId=:chId")
    Integer getCountByChallenge(Long chId);

    List<UserChallenge> findAllByUser_UserId(Long userId);


}