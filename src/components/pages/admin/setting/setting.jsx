import React from "react";
import style from "../setting/setting.module.scss";



export const Setting = () =>{
    return(

        <div className={style.setting}>
            <div className={style.set_items}>
                <h1>Созламалар</h1>
                <div className={style.account_img}>
                    <span className={style.img}><i className="fa-regular fa-image"></i></span>
                    <p>Сурат юклаш</p>
                </div>  
                <div className={style.input_name}>
                    <p>Исмингиз</p>
                    <input type="text" placeholder="Исмингиз" />
                </div>
                <button className={style.save_btn}>Сақлаш</button>
            </div>
        </div>
    )
}