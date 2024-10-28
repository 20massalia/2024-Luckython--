package com.luckython_project.backend.service.ranking;

import com.luckython_project.backend.domain.dto.RankingDto;
import com.luckython_project.backend.domain.entity.ranking.Ranking;
import com.luckython_project.backend.repository.ranking.RankingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RankingService {

    private final RankingRepository rankingRepository;

    // todo
    public List<RankingDto> getRanking() {
        List<Ranking> rankings = rankingRepository.findAll();
        return RankingDto.of(rankings);
    }
}
