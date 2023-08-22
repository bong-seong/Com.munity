package web.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.domain.member.MemberDto;
import web.service.member.MemberService;

@Slf4j
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired MemberService memberService;

    @PostMapping("/signup")
    public int addMember( @RequestBody MemberDto memberDto ){
        log.info( "컨트롤러 : " + memberDto );
        return memberService.addMember( memberDto );
    }

}
