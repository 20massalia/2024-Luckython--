package com.luckython_project.backend.controller;

import com.luckython_project.backend.dto.ChallengeDto;
import com.luckython_project.backend.dto.ChallengeHashListDto;
import com.luckython_project.backend.dto.ChallengeUserListDto;
import com.luckython_project.backend.dto.ImageDto;
import com.luckython_project.backend.entity.UserChallenge;
import com.luckython_project.backend.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/challenge")
public class ChallengeController {

    private final ChallengeService challengeService;

    // 1. 챌린지 생성하기
    @PostMapping
    public ResponseEntity<String> createChallenge(@RequestBody ChallengeDto challengeDto) {
        challengeService.createChallenge(challengeDto);
        return ResponseEntity.status(201).body("Challenge created successfully");
    }

    // 2. 아이디 별 챌린지 조회하기
    @GetMapping("/{userId}")
    public ResponseEntity<List<ChallengeUserListDto>> getUserChallenge(@RequestParam("userId") Long userId){
        List<ChallengeUserListDto> challenges = challengeService.getUserChallenge(userId);
        return ResponseEntity.ok(challenges);
    }

    // 3. 해시태그별 챌린지 목록 조회하기 ?써서 받기
    @GetMapping("/hashtag")
    public ResponseEntity<List<ChallengeHashListDto>> getChallengesByHashtag(@RequestParam("tag") String hashtag) {
        List<ChallengeHashListDto> challenges = challengeService.getChallengesByHashtag(hashtag);
        return ResponseEntity.ok(challenges);
    }

    // 4. 챌린지 수정하기
    @PutMapping("/{chId}")
    public ResponseEntity<String> updateChallenge(@PathVariable Long chId, @RequestBody ChallengeDto challengeDto) {
        challengeService.updateChallenge(chId, challengeDto);
        return ResponseEntity.ok("Challenge updated successfully");
    }

    // 5. 챌린지 삭제하기
    @DeleteMapping("/{chId}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long chId) {
        challengeService.deleteChallenge(chId);
        return ResponseEntity.ok("Challenge deleted successfully");
    }

    // 6. 이미지 인증하기
    @PostMapping("/image")
    public ResponseEntity<String> verifyImage(@RequestParam("chId") Long chId, @RequestParam("userId") Long userId, @RequestBody ImageDto imageDto) {
        challengeService.verifyImage(chId, userId, imageDto);
        return ResponseEntity.ok("Image verified successfully");
    }

    // 7. 챌린지 참여하기
    @PutMapping()
    public ResponseEntity<UserChallenge> participateInChallenge(@RequestParam("chId") Long chId, @RequestParam("userId") Long userId) {
        challengeService.participateInChallenge(chId, userId);
        return ResponseEntity.ok(new UserChallenge());
    }
}
