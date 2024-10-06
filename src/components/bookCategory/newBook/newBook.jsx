import React from "react";
import style from "../../bookCategory/newBook/newBook.module.scss";
import { data } from "../../data/data";

export const NewBook = () =>{
    return(
        <div className={style.newBook}>
            <h1 className={style.newBook_title}>Янги қўшилганлар</h1>
            <div className={style.newBook_items}>
                {data.book.map((book)=>(
                    <div key={book.id} className={style.newBook_item}>
                        <div className={style.newBook_img}>
                            <img src={book.img} alt={book.title} />
                        </div>
                        <h5 className={style.title}>{book.title}</h5>
                        <p className={style.list}>{book.info}</p>
                        <div className={style.newBook_rate_icon}>
                            <div className={style.rate_star}>
                                <span className={style.star}><i class="fa-solid fa-star"></i></span>
                                <p className={style.rate}>{book.rate}</p>
                            </div>
                            <div className={style.newBook_icons}>
                                <span className={style.newBook_icon}><i className="fa-solid fa-book"></i></span>
                                <span className={style.newBook_icon}><i className="fa-solid fa-headphones-simple"></i></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
