import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby'

export default function Products(props) {
    console.log(props.data)
    return (
        <Layout>

        </Layout>
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