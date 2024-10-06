import React from "react";
import style from "../../components/hero/hero.module.scss";
import girl from "../../assets/images/BookGr.svg";
import book from "../../assets/images/placeholder.jpg"
import book2 from "../../assets/images/placeholder2.jpg"
import book3 from "../../assets/images/placeholder3.jpg"


export const Hero = () =>{
    return(
        <div className={style.hero}>
            <div className={style.hero_items}>
                <div className={style.hero_image_title}>
                    <div className={style.hero_image}>
                        <h1 className={style.hero_imgTitle}>Кўп ўқилаётганлар</h1>
                        <div className={style.hero_img}>
                        <img src={girl} alt="" />
                        </div>
                    </div>
                    <div className={style.hero_book_items}>
                        <div className={style.hero_books}>
                            <div className={style.book_img}>
                            <img src={book} alt="" />
                            </div>
                            <span>1984</span>
                        </div>
                        <div className={style.hero_books}>
                            <div className={style.book_img}>
                            <img src={book2} alt="" />
                            </div>
                            <span>Code 8</span>
                        </div>
                        <div className={style.hero_books}>
                            <div className={style.book_img}>
                            <img src={book3} alt="" />                                
                            </div>
                            <span>Rich dad poor dad</span>
                        </div>
                        <span className={style.book_left}><i class="fa-solid fa-angle-left"></i></span>
                        <span className={style.book_right}><i class="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>
                <div className={style.hero_follow}>
                    <h1 className={style.follow_title}>Китоб ўқишни ёқтирасизми?</h1>
                    <p className={style.follow_list}>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                    <button className={style.follow_btn}><i className="fa-regular fa-heart"></i> Обуна бўлиш</button>
                </div>
            </div>  
        </div>
    )
}