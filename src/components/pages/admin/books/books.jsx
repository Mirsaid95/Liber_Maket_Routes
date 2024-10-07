import React from "react";
import style from "../books/books.module.scss";

export const Books = () => {
    return(
        <div className={style.books}>
            <div className={style.books_items}>
                <h1 className={style.books_title}>Sizda hozr kitoblar to'plami mavjud emas</h1>
            </div>
        </div>
    )
}