import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby'

export default function Products(props) {
    console.log(props.data)
    return (
        <h1>hola</h1>
    )
}

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        name
        
      }
    }
  }
`;