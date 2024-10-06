import React from "react";
import style from "../Navbar/navbar.module.scss";


export const Navbar = () => {
    return( 
        <div className={style.navbar}>
            <ul className={style.navbar_lists}>
                <li className={style.navbar_item}><a className={style.navbar_link} href="">Аудиокитоб</a></li>
                <li className={style.navbar_item}><a className={style.navbar_link} href="">Электрон китоблар</a></li>
                <li className={style.navbar_item}><a className={style.navbar_link} href="">Босма китоблар</a></li>
                <li className={style.navbar_item}><a className={style.navbar_link} href="">Контакт</a></li>
                <li className={style.navbar_item}><a className={style.navbar_link} href="">Биз хақимизда</a></li>
            </ul>
        </div>
    )
}