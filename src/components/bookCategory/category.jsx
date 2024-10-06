import React from "react";
import style from "../bookCategory/category.module.scss";
import { data } from "../data/data";

export const Category = () =>{
    return(
        <div className={style.category}>
            <div className={style.category_items}>
                <h1>Рукнлар</h1>
            <div className={style.category_item}>
            {data.rukn.map((rukn) =>(
                <div key={rukn.id} className={style.category_img}>
                    <div className={style.categoryImg}>
                    <img src={rukn.img} alt="Rukn Image" />
                    </div>
                </div>
            ))}
            </div>
            <span className={style.rightIcon}><i className="fa-solid fa-angle-right"></i></span>
            </div>
        </div>
    )
}
