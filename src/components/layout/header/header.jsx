import React from "react";
import logo from "../../../assets/images/Logo.svg";
import app from "../../../assets/icons/app.svg";
import flag from "../../../assets/icons/Frame.svg"
import style from '../header/header.module.scss';
import { NavLink, Route, Routes, } from "react-router-dom";
import { Home } from "../../pages/Home/home";



export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header_items}>
                <NavLink to="/" className={style.header_img}>
                    <img src={logo} alt="" />
                </NavLink>
                <div className={style.input_select}>
                    <div className={style.header_icon_select}>
                        <span><img src={app} alt="" /></span>
                        <select>
                            <option value="1">Рукнлар</option>
                            <option value="2">Рукнлар</option>
                            <option value="3">Рукнлар</option>
                        </select>
                    </div>
                    <div className={style.input}>
                        <input type="text" placeholder="Қидириш"/>
                        <span className={style.header_search}><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className={style.header_language_button}>
                    <form className={style.header_form}>
                        <span><img src={flag} alt="" /></span>
                        <select>
                            <option value="1">Uzb</option>
                            <option value="2">Rus</option>
                            <option value="3">Eng</option>
                        </select>
                    </form>
                    <NavLink to="/admin">
                        <button className={style.header_button}><i className="fa-regular fa-user"></i> Кириш</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}