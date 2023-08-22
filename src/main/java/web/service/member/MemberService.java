package web.service.member;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.domain.member.MemberDto;
import web.domain.member.MemberEntity;
import web.domain.member.MemberEntityRepository;

import java.util.Optional;

@Slf4j
@Service
public class MemberService {

    @Autowired MemberEntityRepository memberEntityRepository;

    public int addMember(MemberDto memberDto) {
        log.info( "서비스 : " + memberDto );

        Optional<MemberEntity> optionalMemberEntity = memberEntityRepository.findByMemail( memberDto.getMemail() );

        if( optionalMemberEntity.isPresent() ){ // 만약에 입력받은 이메일값이 존재하면
            return 2; // 중복아이디 코드
        }

        MemberEntity saveEntity = memberEntityRepository.save( memberDto.toEntity() );

        return 0;
    }
}
