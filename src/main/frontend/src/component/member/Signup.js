import React , { useState , useEffect , useRef } from 'react';
import axios from 'axios';

// CSS
import styles from '../css/signup.module.css' ;

export default function Signup ( props ) {

    const [ memberInfo , setMemberInfo ] = useState( {
        memail : '',
        mpwd : '',
        mpwdConfirm : '',
        mname : '',
        mphone : ''
    })

    const handleInputChange = event => {
        const { name , value } = event.target;
        setMemberInfo( prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const addMember = () => {
        console.log( "addMember 클릭")
        console.log( memberInfo );

        axios.post("/member/signup" , memberInfo ).then( (r) => {
            console.log( r );
        })

    }

    return (<>
        <div className={styles.signup_wrap}>
            <div className={styles.signup_box}>
                <div className={styles.signup_title}> 회원가입 </div>
                <input name="memail" type='text' value={ memberInfo.memail }  onChange = { handleInputChange } placeholder="이메일을 입력해주세요." />
                <input name="mpwd" value={ memberInfo.mpwd }  onChange = { handleInputChange } type='text' placeholder="패스워드를 입력해주세요."/>
                <input name="mpwdConfirm" value={ memberInfo.mpwdConfirm }  onChange = { handleInputChange } type='text' placeholder="패스드를 한번더 입력해주세요."/>
                <input name="mname" value={ memberInfo.mname } onChange = { handleInputChange } type='text' placeholder="이름을 입력해주세요." />
                <input name="mphone" value={ memberInfo.mphone }  onChange = { handleInputChange } type='text' placeholder="전화번호를 입력해주세요."/>
                <button
                    className={styles.signup_button}
                    type="button"
                    onClick={ addMember }
                > 회원가입 </button>
                <div>
                    <div> 프로필 이미지 </div>
                    <input className="mprofile" type="file" />
                </div>
            </div>
        </div>
    </>)
}