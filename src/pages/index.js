import React from 'react'
import { graphql } from 'gatsby'
import Carousel from "../components/Caroulsel"
import Advertising from "../components/Advertising.jsx"
import Banner from "../components/Banner"
import Products from '../components/Products'
const {Company,Caroulsel,AdvertisingItems} = require ('../data/content.js')

export default function index(props) {
    const productsData = props.data.allStripeProduct.nodes
    return (
        <>
        <Carousel Caroulsel={Caroulsel}/>
        <Advertising AdvertisingItems={AdvertisingItems}/>
        <Banner/>
        <Products productsData={productsData}/>
        </>
    )
}

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        images
        name
        description
      }
    }
  }
`;