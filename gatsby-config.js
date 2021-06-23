require('dotenv').config()


module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku',],
        secretKey: process.env.STRIPE_SECRET_KEY ,
        downloadFiles: true,
      }
    }
  ],
}
