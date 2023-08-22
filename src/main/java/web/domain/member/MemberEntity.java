package web.domain.member;

import lombok.*;

import javax.persistence.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Builder
@Table( name = "member" )
public class MemberEntity {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int mno;

    @Column private String memail;
    @Column String mpwd;
    @Column String mname;
    @Column String mphone;
    @Column String mprofile;
    @Column String mgrade;

    public MemberDto toDto () {
        return MemberDto.builder()
                .memail( this.memail )
                .mname( this.mname )
                .mphone( this.mphone )
                .build();
    }

}
