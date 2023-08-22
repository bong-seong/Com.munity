import React , { useEffect } from 'react' ;

// CSS
import styles from './css/index.module.css' ;

export default function Header ( props ){
    return (<>
        <div className = { styles.top_wrap }>
            <div className={styles.top_main_box}>
                <div className={styles.main_logo_text}>
                      <a href="/"> COM.<span className={styles.logo_parts}>MUNITY</span> </a>
                </div>
                <div className={styles.menu_box}>
                    <a href="/login"> 로그인 </a>
                    <a href="/signup"> 회원가입 </a>
                </div>
            </div>
        </div>

    </>);

}