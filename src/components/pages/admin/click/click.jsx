import React from "react";
import style from "../click/click.module.scss";
import cash from "../../../../assets/images/cash.svg";
import payme from "../../../../assets/images/payme.svg"
import click from "../../../../assets/images/click.svg"


export const Click = () =>{
    return(
        <div className={style.click}>
            <div className={style.click_items}>
                <div className={style.balance_items}>
                    <div className={style.item}>
                        <p className={style.item_list}>Баланс</p>
                        <h1 className={style.item_cash}>45 000 сўм</h1>
                    </div>
                    <div className={style.item_img}>
                        <img src={cash} alt="" />
                    </div>
                </div>
                <div className={style.click_btns}>
                    <button className={style.btn}><img src={payme} alt="" /></button>
                    <button className={style.btn}><img src={click} alt="" /></button>
                </div>
            </div> 
        </div>
        

    )
}