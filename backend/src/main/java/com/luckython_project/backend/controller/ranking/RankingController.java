package com.luckython_project.backend.controller.ranking;

import com.luckython_project.backend.domain.dto.RankingDto;
import com.luckython_project.backend.domain.entity.user.User;
import com.luckython_project.backend.service.ranking.RankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class RankingController {

    private final RankingService rankingService;

    // 랭킹 조회
    @GetMapping("/ranking")
    public ResponseEntity<List<RankingDto>> getRanking(){
        return ResponseEntity.ok()
                .body(rankingService.getRanking());
    }
}
