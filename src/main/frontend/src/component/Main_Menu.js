import React , { useEffect } from 'react' ;

// CSS
import styles from './css/menu.module.css' ;

export default function Main_Menu ( props ){
    return (<>
        <div className={styles.menu_wrap}>
            <div className={styles.menu_size_box}>
                <a href="#"> 메뉴1 </a>
                <a href="#"> 메뉴2 </a>
                <a href="#"> 메뉴3 </a>
                <a href="#"> 메뉴4 </a>
                <a href="#"> 메뉴5 </a>
                <a href="#"> 메뉴6 </a>
            </div>
        </div>
    </>)
}