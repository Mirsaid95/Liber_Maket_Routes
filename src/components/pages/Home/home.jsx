import React from "react";
import { Header } from '../../layout/header/header'
import { Navbar } from '../../layout/Navbar/Navbar'
import { Hero } from '../../hero/hero'
import { Info } from '../../info/info'
import { Category } from '../../bookCategory/category'
import { NewBook } from '../../bookCategory/newBook/newBook'
import { AudioBook } from '../../bookCategory/audioBook/audioBook'
import { Footer } from '../../layout/footer/footer'


export const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <Info />
            <Category />
            <NewBook />
            <AudioBook />
            <Footer />
        </div>
    )
}