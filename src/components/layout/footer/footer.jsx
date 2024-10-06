import React from "react";
import style from "../footer/footer.module.scss";
import appstore from "../../../assets/images/appstore.svg";
import googleplay from "../../../assets/images/googleplay.svg";
import uzcard from "../../../assets/icons/uzcard.svg"
import humocard from "../../../assets/icons/humocard.svg"
import payme from "../../../assets/icons/Payme.svg"



export const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.footer_items}>
                <div className={style.footer_container}>
                    <div className={style.footer_column}>
                        <h1 className={style.footer_title}>Платформа хақида</h1>
                        <ul className={style.footer_lists}>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Liber ўзи нима?</a></li>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Фойдаланиш шартлари</a></li>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Ёрдам</a></li>
                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <h1 className={style.footer_title}>Обуна хақида</h1>
                        <ul className={style.footer_lists}>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Обуна бўлиш</a></li>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Қандай тўлаш</a></li>

                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <h1 className={style.footer_title}>Китоблар</h1>
                        <ul className={style.footer_lists}>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Аудио китоблар</a></li>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Электрон китоблар</a></li>
                            <li className={style.footer_item}><a href="#" className={style.footer_link}>Китоблар</a></li>
                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <h1 className={style.footer_title}>Мобил илова</h1>
                        <ul className={style.footer_appstore}>
                            <li className={style.footer_item_apps}><a className={style.footer_img_app} href="https://play.google.com/store/apps/details?id=com.liber.app&hl=uz&pli=1"><img src={appstore} alt="" /></a></li>
                            <li className={style.footer_item_apps}><a className={style.footer_img_app} href="https://play.google.com/store/apps/details?id=com.liber.app&hl=uz&pli=1"><img src={googleplay} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <div className={style.footer_bottom_items}>
                    <div className={style.footer_social}>
                        <p className={style.footer_list}>&copy;Ижтимоий тармоқлар</p>
                        <div className={style.social_icons}>
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            <a href="#" aria-label="Telegram"><i className="fab fa-telegram-plane"></i></a>
                            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div className={style.footer_social_number_info}>
                        <p className={style.footer_list}>Боғланиш</p>
                        <div className={style.footer_link_number}>
                            <p className={style.footer_list}><a href="">+998 90 253 77 53</a></p>
                            <p className={style.footer_list}><a href="">support@liber.uz</a></p>
                        </div>
                    </div>
                    <div className={style.footer_payment}>
                        <p className={style.footer_list}>Тўлов усуллари</p>
                        <div className={style.payment_icons}>
                            <span className={style.payment_icon}><img src={uzcard} alt="UzCard" /></span>
                            <span className={style.payment_icon}><img src={humocard} alt="Humo" /></span>
                            <span className={style.payment_icon}><img src={payme} alt="Payme" /></span>
                        </div>
                    </div>
                </div>
            </div>
           
        </footer>
            

    )
}