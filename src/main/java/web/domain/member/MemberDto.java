package web.domain.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor @Builder
public class MemberDto {

    private int mno;
    private String mid;
    private String mpwd;
    private String mname;
    private String mphone;
    private String memail;
    private String mprofile;
    private String mgrade;
}
