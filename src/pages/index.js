import React from "react"
import Carousel from "../components/Caroulsel"
import Nav from "../components/Nav"
import Advertising from "../components/Advertising.jsx"
import Banner from "../components/Banner"
import Products from "../components/Products.jsx"
import Footer from "../components/Footer.jsx"
const {menuContent, Company,Caroulsel} = require ('../data/content.js')

export default function Home() {
  return <div>
    <Nav
      menuContent={menuContent}
      Company={Company}
    />
    <Carousel
      Caroulsel={Caroulsel}
    />
    <Advertising/>
    <Banner/>
    <Products/>
    <Banner/>
    <Products/>
    <Banner/>
    <Footer/>
    </div>
}
