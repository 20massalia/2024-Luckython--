package com.luckython_project.backend.service;

import com.luckython_project.backend.dto.RankingDto;
import com.luckython_project.backend.entity.User;
import com.luckython_project.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class RankingService {

    private final UserRepository userRepository;

    // 랭킹 조회
    public List<RankingDto> getRanking() {
        List<User> rankings = userRepository.findAll();

        // 점수 내림차순 정렬 후 상위 10명 선택
        List<User> sortedRankings = rankings.stream()
                .sorted(Comparator.comparingInt(User::getPoint).reversed())
                .limit(10)
                .collect(Collectors.toList());

        // 정렬된 순서대로 랭킹을 부여
        return IntStream.range(0, sortedRankings.size())
                .mapToObj(index -> {
                    User user = sortedRankings.get(index);
                    return new RankingDto(
                            user.getUserId(),
                            user.getUsername(),
                            user.getPoint(),
                            index + 1
                    );
                })
                .collect(Collectors.toList());
    }
}