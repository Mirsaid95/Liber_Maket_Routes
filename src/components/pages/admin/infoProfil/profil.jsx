import React from "react";
import style from "../infoProfil/profil.module.scss";
import logo from "../../../../assets/images/logoGirl.svg";

export const Accaunt = () => {
    return (
        <div className={style.accaunt}>
            <div className={style.accaunt_items}>
                <div className={style.accaunt_image}>
                    <img src={logo} alt="Profile Logo" />
                </div>
                <div className={style.accaunt_informs}>
                    <h1 className={style.informs_title}>Суғдиёна Икромова</h1>
                    <p className={style.informs_num}>+998 90 253 77 53</p>
                    <p className={style.informs_id}>ID: 0001  Баланс: 45 000 сўм</p>
                </div>

            </div>
        </div>
    );
}