import React from 'react'
import { graphql } from 'gatsby'
import Carousel from "../components/Caroulsel"
import Advertising from "../components/Advertising.jsx"
import Banner from "../components/Banner"
import Layout from '../components/Layout';
import Products from '../components/Products'
const {Company,Caroulsel} = require ('../data/content.js')

export default function index(props) {
    const productsData = props.data.allStripeProduct.nodes
    return (
        <Layout>
        <Carousel Caroulsel={Caroulsel}/>
        <Advertising/>
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
      }
    }
  }
`;