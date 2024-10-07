import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/admin/admin.module.scss";
import { Header } from "../../layout/header/header";
import { Accaunt } from "./infoProfil/profil";
import { Dashboard } from "./dashboard/board";



export const Tab = () => {
    return (
        <div className={style.tab}>
            <Header />
            <Accaunt />
            <div className={style.NavLink_items}>
                <div className={style.navLinks}>
                    <div className={style.link}>
                        <NavLink to="/admin/" className={style.navStyle}>
                            <span><i class="fa-solid fa-tag"></i></span>
                            <p>Обуна бўлиш</p>
                        </NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to="/admin/Click" className={style.navStyle}>
                            <span><i class="fa-solid fa-wallet"></i></span>
                            <p>Э-Хисоб</p>
                        </NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to="/admin/Books" className={style.navStyle}>
                            <span><i class="fa-solid fa-book-bookmark"></i></span>
                            <p>Китобларим</p>
                        </NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to="/admin/Saved" className={style.navStyle}>
                            <span><i class="fa-solid fa-bookmark"></i></span>
                            <p>Сақланганлар</p>
                        </NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to="/admin/Setting" className={style.navStyle}>
                            <span><i class="fa-solid fa-gear"></i></span>
                            <p>Созламалар</p>
                        </NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to="/admin/Dark_light" className={style.navStyle}>
                            <span><i class="fa-solid fa-moon"></i></span>
                            <p>Тунги режим</p>
                        </NavLink>
                    </div>
                </div>
                <div className={style.tab_dash}>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}
