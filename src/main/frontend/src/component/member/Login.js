import React , { useEffect } from 'react' ;

// CSS
import styles from '../css/login.module.css' ;

export default function Login ( props ) {
    return (<>
        <div className={styles.login_wrap}>
            <div className={styles.login_box}>
                <div>ID</div>
                <input type="text"/>
                <div>PW</div>
                <input type="text"/>
                <div><button type="button"> 로그인 </button></div>
            </div>
        </div>
    </>)
}