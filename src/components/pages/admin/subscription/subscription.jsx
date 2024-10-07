import React from "react";
import style from "../subscription/subscription.module.scss";
import subscription from "../../../../assets/images/subscribe.svg";
import { Header } from "../../../layout/header/header";


export const Subscription = () => {
    return (
        <div className={style.subs}>
            <div className={style.subs_items}>
                <div className={style.subs_title_img}>
                    <h1 className={style.subs_title}>Узингиз севган булимга
                        обуна бўлинг</h1>
                    <div className={style.subs_img}>
                        <img src={subscription} alt="" />
                    </div>
                </div>
                <div className={style.subs_info}>
                    <div className={style.subs_form_select_title}>
                        <div className={style.subs_form_select}>
                            <h1 className={style.form_title}>Обуна</h1>
                            <form>
                                <label htmlFor="options">Обуна давом этиш вакти</label>
                                <select>
                                    <option value="1">30 кун</option>
                                    <option value="2">60 кун</option>
                                </select>
                            </form>
                        </div>
                        <div className={style.subs_form_select}>
                            <form>
                                <label htmlFor="options">Булимни танланг</label>
                                <select>
                                    <option value="1">Фантастика</option>
                                    <option value="2">Детектив</option>
                                </select>
                            </form>
                        </div>
                        <h1 className={style.form_title2}>Обуна 30 кун давом этади</h1>
                    </div>
                    <div className={style.subs_seans}>
                        <div className={style.subs_seans_items}>
                            <div className={style.subs_seans_item}>
                                <p className={style.subs_seans_list}>Бошланиш вакти</p>
                                <p className={style.subs_seans_day}>12/09/2021</p>
                            </div>
                            <div className={style.subs_seans_item}>
                                <p className={style.subs_seans_list}>Якунланиш вакти</p>
                                <p className={style.subs_seans_day}>12/10/2021   </p>
                            </div>
                            <div className={style.subs_seans_item}>
                                <p className={style.subs_seans_list}>Обуна нархи</p>
                                <p className={style.subs_seans_price}>12 000 сум</p>
                            </div>
                        </div>
                        <button className={style.subs_button}>Обуна булиш</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}