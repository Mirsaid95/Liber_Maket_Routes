import React from "react";
import style from "../../bookCategory/audioBook/audioBook.module.scss";
import { data } from "../../data/data";

export const AudioBook = () =>{
    return(
        <div className={style.audioBook}>
            <h1 className={style.audioBook_title}>Аудио китоблар</h1>
            <div className={style.audioBook_items}>
                {data.audio.map((item)=>(
                    <div key={item.id} className={style.audioBook_item}>
                        <div className={style.audioBook_img}>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h5 className={style.title}>{item.title}</h5>
                        <p className={style.list}>{item.info}</p>
                        <div className={style.audioBook_rate_icon}>
                            <div className={style.rate_star}>
                                <span className={style.star}><i class="fa-solid fa-star"></i></span>
                                <p className={style.rate}>{item.rate}</p>
                            </div>
                            <div className={style.audioBook_icons}>
                                <span className={style.audioBook_icon}><i className="fa-solid fa-book"></i></span>
                                <span className={style.audioBook_icon}><i className="fa-solid fa-headphones-simple"></i></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}