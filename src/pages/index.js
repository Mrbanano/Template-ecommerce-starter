import React from 'react'
import { graphql } from 'gatsby'
import Carousel from "../components/Caroulsel"
import Advertising from "../components/Advertising.jsx"
import Banner from "../components/Banner"
import Products from '../components/Products'
import Layout from '../components/Layout'
const {Company,Caroulsel,AdvertisingItems} = require ('../data/content.js')

export default function index(props) {
    const productsData = props.data.allStripeProduct.nodes
    return (
        <Layout>
          <h1>Prueba</h1>
        <Carousel Caroulsel={Caroulsel}/>
        <Advertising AdvertisingItems={AdvertisingItems}/>
        <Banner/>
        <Products productsData={productsData}/>
        </Layout>
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
        slug
      }
    }
  }
`;