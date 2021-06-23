import React from "react"
import Carousel from "../components/Caroulsel"
import Nav from "../components/Nav"
const {menuContent, Company} = require ('../data/content.js')

export default function Home() {
  return <div>
    <Nav
      menuContent={menuContent}
      Company={Company}
    />
    <Carousel/>
    </div>
}
