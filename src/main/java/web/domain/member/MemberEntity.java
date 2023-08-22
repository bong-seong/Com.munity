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

    @Column private String mid;
    @Column String mpwd;
    @Column String mname;
    @Column String mphone;
    @Column String memail;
    @Column String mprofile;
    @Column String mgrade;
}
