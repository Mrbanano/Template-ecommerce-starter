import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

export default function ProductDetail(props) {
  const ProductDetail = props.data.stripeProduct

  const image = ProductDetail.images[0]
  return (

    <Layout>
      <div className="ProductDetail">
        <div className="ProductDetail-container">
          <div className="ProductDetail-content">
            <div className="ProductDetail-image">
              <img src={image} alt={ProductDetail.name} />
            </div>
            <div className="ProductDetail-text">
              <p className="ProductDetail-title">{ProductDetail.name}</p>
              <p className="ProductDetail-subtitle">{ProductDetail.description}</p>
            </div>
            <div className="ProductDetailFooter">
              <p><strong> aqui va el selector de cantidad </strong></p>
              <div className="content-footer-button secundary">
                <Link className="a" to={"/productos"} >Añadir al carrito </Link>
              </div>
              <div className="content-footer-button">
                <Link className="a" to={"/productos"} >Compar ahora </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
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