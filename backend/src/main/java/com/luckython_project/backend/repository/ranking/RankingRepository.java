package com.luckython_project.backend.repository.ranking;

import com.luckython_project.backend.domain.entity.ranking.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, Long> {
}
