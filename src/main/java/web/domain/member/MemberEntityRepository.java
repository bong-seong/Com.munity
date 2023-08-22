package web.domain.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberEntityRepository extends JpaRepository<MemberEntity , Integer> {

    // 멤버 이메일로 엔티티 찾기
    Optional<MemberEntity> findByMemail( String memail );

}
