import React from "react";
import style from "../dashboard/board.module.scss";
import { Routes,Route } from "react-router-dom";
import { Subscription } from "../subscription/subscription";
import { Click } from "../click/click";
import { Books } from "../books/books";
import { Saved } from "../saved/saved";
import { Setting } from "../setting/setting";



export const Dashboard = () =>{
    return(
        <div className={style.dash_items}>
            <Routes>
                <Route path="/" index element={<Subscription/>}/>
                <Route path="Click" index element={<Click/>}/>
                <Route path="Books" index element={<Books/>}/>
                <Route path="Saved" index element={<Saved/>}/>
                <Route path="Setting" index element={<Setting/>}/>
            </Routes>
        </div>
    )
}