import React from "react";
import style from "../info/info.module.scss";

export const Info = () =>{
    return(
        <div className={style.info}>
            <div className={style.info_items}>
                <div className={style.info_item}>
                    <span className={style.info_icon}><i class="fa-solid fa-bolt"></i></span>
                    <div className={style.info_icon_title_list}>
                        <h5 className={style.info_title}>Тезкор етказиш</h5>
                        <p className={style.info_list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className={style.info_item}>
                    <span className={style.info_icon}><i class="fa-solid fa-shield-halved"></i></span>
                    <div className={style.info_icon_title_list}>
                        <h5 className={style.info_title}>Тўлов химояси</h5>
                        <p className={style.info_list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className={style.info_item}>
                    <span className={style.info_icon}><i class="fa-solid fa-thumbs-up"></i></span>
                    <div className={style.info_icon_title_list}>
                        <h5 className={style.info_title}>Юқори сифат</h5>
                        <p className={style.info_list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className={style.info_item}>
                    <span className={style.info_icon}><i class="fa-solid fa-star"></i></span>
                    <div className={style.info_icon_title_list}>
                        <h5 className={style.info_title}>Энг сара китоблар</h5>
                        <p className={style.info_list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}