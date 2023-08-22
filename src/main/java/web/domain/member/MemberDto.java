package web.domain.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor @Builder
public class MemberDto {

    private int mno;
    private String memail;
    private String mpwd;
    private String mname;
    private String mphone;
    private String mprofile;
    private String mgrade;

    public MemberEntity toEntity () {
        return MemberEntity.builder()
                .memail( this.memail )
                .mpwd( this.mpwd )
                .mname( this.mname )
                .mphone( this.mphone )
                .build();
    }

}
