import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function ProductDetail(props) {
     const ProductDetail = props.data.stripeProduct

     const image = ProductDetail.images[0]
    return (
        <div>
            <Layout>
            <p>{ProductDetail.name}</p>
            <p>{ProductDetail.description}</p>
            <img src={image} alt="" />
            </Layout>
        </div>
    )
}

export const pageQuery = graphql`
query($id : String) {
    stripeProduct(id: {eq: $id}) {
      description
      images
      name
    }
  }
`;