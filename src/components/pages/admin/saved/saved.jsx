import React from "react";
import style from "../saved/saved.module.scss";



export const Saved = () => {

    return(
        <div className={style.saved}>
            <div className={style.saved_items}>
                <h1 className={style.save}>Sizda hozrgi vaqtda saqlangan kitoblar yo'q</h1>
            </div>
        </div>
    )
}